import './Web2.css';
import { useEffect } from 'react';


function Web2(){
  /*useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "/WebJavascript.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);*/
  return (
    <div className='container'>
      <div className="app">
        <h1><svg className="logo">
            <use xlinkHref="#home" />
          </svg> My Home</h1>
        <ul className="widget">
          <li>
            <h2>Temperature</h2>
            <div className="val">23<small><sup>°</sup>c</small></div>
          </li>
          <li>
            <h2>Water</h2>
            <div className="val">7.5<small>m³</small></div>
          </li>
          <li>
            <h2>Power</h2>
            <div className="val">160<small>kw</small></div>
          </li>
          <li>
            <h2>Alarm</h2>
            <div className="val">ON</div>
          </li>
        </ul></div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" style={{display: 'none'}}>
        <symbol id="home" x="0px" y="0px" viewBox="0 0 298.179 298.179" style={{enableBackground: 'new 0 0 298.179 298.179'}} xmlSpace="preserve" width="25px" height="25px">
          <path d="M293.751,150.478L149.965,0.977L4.534,150.41c-6.163,6.333-6.026,16.462,0.307,22.625c3.11,3.027,7.136,4.534,11.158,4.534   c4.167,0,8.165-1.618,11.3-4.841l5.477-5.799v130.273h232V166.861l5.744,5.799c6.127,6.371,16.339,6.567,22.706,0.441   C299.595,166.975,299.876,156.846,293.751,150.478z M148.789,246.024l-17.635-17.688c4.881-4.843,11.257-7.266,17.634-7.266   c6.399,0,12.797,2.438,17.682,7.314L148.789,246.024z M186.758,208.135c-10.142-10.143-23.626-15.729-37.969-15.729   c-14.344,0-27.827,5.586-37.969,15.728l-11.314-11.313c13.163-13.165,30.666-20.415,49.283-20.415   c18.616,0,36.119,7.25,49.283,20.415L186.758,208.135z M217.762,177.128c-18.422-18.424-42.917-28.57-68.973-28.57   c-26.057,0-50.552,10.146-68.976,28.571l-11.315-11.314c21.446-21.446,49.96-33.257,80.29-33.257   c30.329,0,58.843,11.811,80.287,33.258L217.762,177.128z" fill="#FFFFFF" />
        </symbol>
      </svg>
    </div>
  );
  };
  
  export default Web2;