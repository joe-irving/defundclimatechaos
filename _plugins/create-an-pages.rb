require 'jekyll'
require 'action_network_rest'
require 'net/http'
require 'json'

module JsonCollection
  class Generator < ::Jekyll::Generator
    def generate(site)
      an_gen_pages = site.pages.select{ |page| page.data['layout'] == "an-page"}
      client = ActionNetworkRest.new(api_key: ENV['AN_API_KEY'])
      an_gen_pages.each do |page|
        event = client.events.get(page.data['an_id'])
        page.data['description'] = event['description']
        page.data['start'] = event['start_date']
        page.data['end'] = event['end_date']
        page.data['image'] = event['featured_image_url']
        uri = URI('https://actionnetwork.org/oembed/')
        params = { :url => event['browser_url'], :style => "layout-only" }
        uri.query = URI.encode_www_form(params)
        embed = Net::HTTP.get_response(uri)
        if embed.is_a?(Net::HTTPSuccess)
          page.data['embed'] = JSON.parse(embed.body)
        end
      end
    end
  end
end
