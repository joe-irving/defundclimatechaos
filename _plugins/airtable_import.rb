require 'jekyll'
require 'json'
require 'airtable'
require 'active_support/all'
# require 'active_support/all'

module Airtable
  class Generator < ::Jekyll::Generator
    priority :low

    def generate(site)
      return unless site.config['airtable']
      # Get API key from environment
      puts ENV.to_yaml
      api_key = ENV['AIRTABLE_API_KEY']
      # Pass in api key to client
      @client = Airtable::Client.new(api_key)
      site.config['airtable'].each do |name, conf|
        # Pass in the app key and table name
        @table = @client.table(conf['app'], conf['table'])
        # Get records where the Published field is checked
        @records = @table.records(:filterByFormula => "Published", :limit => 100)
        # Extract data to a hash
        data = @records.map { |record| record.attributes }
        puts data.to_yaml
        site.data[name] = data
      end
    end
  end
end
