require 'jekyll'
require 'net/http'
require 'json'

module GenerateLocation
  class Generator < ::Jekyll::Generator
    def generate(site)
      site.collections['actions'].docs.each_with_index do |event,i|
        event.data['start_date'] = dearray(event.data['start_date'])
        event.data['end_date'] = dearray(event.data['end_date'])

        uri = URI('https://geocode.maps.co/search')
        params = { :q => event.data['address'] }
        uri.query = URI.encode_www_form(params)
        location_res = Net::HTTP.get_response(uri)
        # location_hash = {}
        if location_res.is_a?(Net::HTTPSuccess)
          location = JSON.parse(location_res.body)
          if location.length > 0
            event.data['geocode']= location[0]
            event.data['latitude'] ||= location[0]['lat']
            event.data['longitude'] ||= location[0]['lon']
            # location_hash = {
            #   :location => {
            #     :latitude => location[0]['lat'],
            #     :longitude => location[0]['lon']
            #   }
            # }
          end
        end
        # event.data['location'] = location_hash
      end
    end
    def dearray(array)
      if array.kind_of?(Array)
        array[0]
      else
        array
      end
    end
  end
end
