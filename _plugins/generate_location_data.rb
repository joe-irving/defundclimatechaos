require 'jekyll'
require 'net/http'
require 'json'
require 'time'

module GenerateLocation
  class Generator < ::Jekyll::Generator
    def get_date_hash(date)
      return {:date=>nil,:time=>nil} unless date
      date_object = Time.parse(date)
      {
        :date => date_object.strftime("%A %e %B"),
        :time => date_object.strftime("%I:%M %P"),
      }
    end
    def generate(site)
      site.collections['actions'].docs.each_with_index do |event,i|
        event.data['start_date'] = dearray(event.data['start_date'])
        event.data['start'] = get_date_hash(event.data['start_date'])
        event.data['end_date'] = dearray(event.data['end_date'])
        event.data['end'] = get_date_hash(event.data['end_date'])

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
        if !event.data['latitude'] || !event.data['longitude'] || event.data['address'].include?('TBC') || event.data['address'].include?('Online')
          event.data['map_exclude'] = true
        end
        # event.data['location'] = location_hash
      end
    end
    def dearray(array)
      return array unless array.kind_of?(Array)
      array[0]
    end
  end
end
