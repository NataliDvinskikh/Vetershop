import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contact() {
    return (
    <div>
      <div className='cont info'>
        Opening hours: Mon-Sun 10 a.m.- 9 p.m.
      </div>
      <div className='cont info'>
        Moscow. Kutuzovsky prospect 1/7, space "Friends Social Club"
      </div>

      <div className='cont info'>
        <YMaps>
          <Map
            defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"], }}
            modules={["control.ZoomControl", "control.FullscreenControl"]} >
            <Placemark defaultGeometry={[55.75, 37.57]} />
          </Map>
        </YMaps>
      </div>
    </div>
    )
}

export default Contact;
