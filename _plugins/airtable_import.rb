require 'jekyll'
#require 'json'
require 'airtable'
require 'active_support/all'
# require 'active_support/all'

module Airtable
  class Generator < ::Jekyll::Generator
    priority :medium

    def generate(site)
      return unless site.config['airtable']
      # Get API key from environment
      api_key = ENV['AIRTABLE_API_KEY']
      # Pass in api key to client
      @client = Airtable::Client.new(api_key)
      site.config['airtable'].each do |name, conf|
        # Pass in the app key and table name
        @table = @client.table(conf['app'], conf['table'])
        # Get records where the Published field is checked
        @records = @table.records(:view => conf['view'],:fields => conf['fields'], :limit => 100)
        # Extract data to a hash
        data = @records.map { |record| record.attributes }

        if conf['collection']
          slug_field = conf['collection']['slug']
          layout = conf['collection']['layout']
          if site.collections[name]
            new_collection = site.collections[name]
          else
            new_collection = Jekyll::Collection.new(site, name)
          end
          # new_collection = Jekyll::Collection.new(site, name)
          data.each do |item|
            if item[slug_field] and item[slug_field] != ''
              # Extract attachments to just their URL
              item.each do |key,val|
                if val.kind_of?(Array)
                  if val[0]['url']
                    item[key] = val[0]['url']
                  end
                end
              end
              content = item[conf['collection']['content']]
              puts content
              path = File.join(site.source, "_#{name}", "#{Jekyll::Utils.slugify(item[slug_field])}.md")
              doc = Jekyll::Document.new(path, collection: new_collection, site: site)
              item.merge!({ 'layout' => layout })
              doc.merge_data!(item.except('id'))
              doc.content = content
              new_collection.docs << doc
              # puts "ITEM"
              # puts item.to_yaml
              # puts "DOC"
              # puts doc.to_yaml
            end
          end
          site.collections[name] = new_collection
        else
          site.data[name] = data
        end
      end
    end
  end
end
