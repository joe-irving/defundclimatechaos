require "rqrcode"

module Jekyll
    module QRFilter
      def qr(input)
        qrcode = RQRCode::QRCode.new(input)

        q = qrcode.as_svg({
            use_path: true,
            xml_decleration: false
        })
        '<svg' + q.split('<svg')[1]
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::QRFilter)