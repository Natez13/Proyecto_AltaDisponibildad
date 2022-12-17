import './Web.css';
import { useEffect,useState,useLayoutEffect } from 'react';
import axios from 'axios'


/*
function getTime()
{
  var date = new Date(Date.now())
  var minutes = date.getMinutes();
  var hour = date.getHours();
  if(minutes<10){
    minutes='0'+minutes
  }
  if(hour<10){
    hour='0'+hour
  }

  
  return hour+':'+minutes
}
*/





function Web (){

  useLayoutEffect(() => {
    axios("/api/get_data")
    .then((response) => {
      console.log('Data:',response.data)
      setData(response.data)
    }).catch(error => {
      setData(null)
    })

  }, []);

  const [time, setTime] = useState(Date(Date.now()));
  const [data, setData] = useState(null);


  /*
    console.log(data)

  useEffect(() => {
    getData().then(data => setDivisa(data?data['divisas'][0]:null))
  }, []) 

  useEffect(() => {
    getData().then(data => setTemp(data?data['climas'][0].clima:null))
  }, []) 

  <div className="dashboard-header__date">{time?time:'0'}</div>
  */
  useEffect(() => {
    const interval = setInterval(() => setTime(Date(Date.now())), 1000);

    return () => {
      
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval_data = setInterval(() => 
  
    axios("/api/get_data")
    .then((response) => {
      console.log('Data:',response.data)
      setData(response.data)
    }).catch(error => {
      setData(null)
    })
    , 30000);

    return () => {
      
      clearInterval(interval_data);
    };
  }, []);

return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Home Monitoring</title>
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css" />
        <div className="container">
          <div className="dashboard">
            <div className="dashboard-header">
              <div className="dashboard-header__title">Chile Today </div>
              <div className="dashboard-header__date">{time?time:'0'}</div>
            </div>
            <div className="dashboard-card divisa">
            <div className="dashboard-card__title"><span className="fa fa-money" />Divisas</div>
              <div className="dashboad-card__content">
                <div className="dashboard-card__card-piece">
                  <div className="stats__item">
                    <div className="stats__title">Dolar</div>
                    <div className="stats__measure">
                      <div className="stats__value">{data?data['divisas'][0].dolar:'0'}</div>
                      <div className="stats__unit stats__unit_power">CLP</div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card__card-piece">
                  <div className="stats__item">
                    <div className="stats__title">Euro</div>
                    <div className="stats__measure">
                      <div className="stats__value">{data?data['divisas'][0].Euro:'0'}</div>
                      <div className="stats__unit stats__unit_power">CLP</div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card__card-piece">
                  <div className="stats__item">
                    <div className="stats__title">UF</div>
                    <div className="stats__measure">
                      <div className="stats__value">{data?data['divisas'][0].UF:'0'}</div>
                      <div className="stats__unit stats__unit_power">CLP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card temp">
              <div className="dashboard-card__title"><span className="wi wi-thermometer" />Temperatura</div>
              <div className="dashboad-card__content">
                <div className="dashboard-card__card-piece">
                  <div className="temperature-stats">
                    <div className="stats__item">
                    <div className="stats__title">Exterior</div>
                      <div className="stats__icon"><span className="fa fa-tree" /></div>
                      <div className="stats__measure">
                        <div className="stats__value">{data?data['climas'][0].clima:'0'}</div>
                        <div className="stats__unit stats__unit_celsius">C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-card cross">
              <div className="dashboard-card__title"><span className="fa fa-gamepad" />Crucigrama</div>
              <div className="dashboad-card__content">
                <div className="dashboard-card__card-piece">
                  <div className="temperature-stats">
                    <div className="stats__item">
                    <div>
                      <a href="https://elpais.com/juegos/crucigramas/" className="icon-button twitter"><i className=" fa fa-puzzle-piece fa-2x"></i><span /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card witch">
              <div className="dashboard-card__title"><span className="fa fa-gamepad" />Witch TD</div>
              <div className="dashboad-card__content">
                <div className="dashboard-card__card-piece">
                  <div className="temperature-stats">
                    <div className="stats__item">
                    <div>
                      <a href="/witchTD/witchcraft.html" className="icon-button twitter"><svg className='witch-Hat' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg><span /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  };
  
  export default Web;