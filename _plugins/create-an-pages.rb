require 'jekyll'
require 'action_network_rest'
require 'net/http'
require 'json'

module ActionNetworkPages
  class Generator < ::Jekyll::Generator
    def generate(site)
      an_gen_pages = site.pages.select{ |page| page.data['layout'] == "an-page"}
      client = ActionNetworkRest.new(api_key: ENV['AN_API_KEY'])
      an_gen_pages.each do |page|
        event = client.events.get(page.data['an_id'])
        page.data['description'] = event['description']
        if event['start_date'].kind_of?(Array)
          page.data['start_date'] = event['start_date'][0]
        else
          page.data['start_date'] = event['start_date']
        end
        page.data['start'] = page.data['start_date']
        page.data['end'] = event['end_date']
        page.data['image'] = event['featured_image_url']
        uri = URI('https://actionnetwork.org/oembed/')
        params = { :url => event['browser_url'], :style => "layout-only" }
        uri.query = URI.encode_www_form(params)
        embed = Net::HTTP.get_response(uri)
        if embed.is_a?(Net::HTTPSuccess)
          # Add embed detail to page TODO
          page.data['embed'] = JSON.parse(embed.body)
        end
      end
    end
  end
end
