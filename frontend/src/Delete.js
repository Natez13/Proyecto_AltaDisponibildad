<div className="dashboard-card wifi">
<div className="dashboard-card__title"><span className="fa fa-wifi" />Wifi</div>
<div className="dashboad-card__content">
  <div className="dashboard-card__card-piece">
    <div className="status status_success">
      <div className="status__icon"><span className="fa fa-check" /></div>
      <div className="status__text">Activated</div>
    </div>
  </div>
</div>
</div>
<div className="dashboard-card alarm">
<div className="dashboard-card__title"><span className="fa fa-bell-o" />Alarm</div>
<div className="dashboad-card__content">
  <div className="dashboard-card__card-piece">
    <div className="status status_danger">
      <div className="status__icon"><span className="fa fa-times" /></div>
      <div className="status__text">Disabled</div>
    </div>
  </div>
</div>
</div>
<div className="dashboard-card light">
              <div className="dashboard-card__title"><span className="fa fa-lightbulb-o" />Light</div>
              <div className="dashboad-card__content">
                <div className="dashboard-card__card-piece">
                  <div className="light-switches">
                    <div className="switch switch_order-1">
                      <div className="switch__name">Entrance hall</div>
                      <input type="checkbox" id="switch1" className="switch__input" tabIndex={2} defaultChecked />
                      <label htmlFor="switch1" className="switch__label" />
                    </div>
                    <div className="switch switch_order-2">
                      <div className="switch__name">Bedroom 1</div>
                      <input type="checkbox" id="switch2" className="switch__input" tabIndex={3} />
                      <label htmlFor="switch2" className="switch__label" />
                    </div>
                    <div className="switch switch_order-1">
                      <div className="switch__name">Living room</div>
                      <input type="checkbox" id="switch3" className="switch__input" tabIndex={2} />
                      <label htmlFor="switch3" className="switch__label" />
                    </div>
                    <div className="switch switch_order-2">
                      <div className="switch__name">Bedroom 2</div>
                      <input type="checkbox" id="switch4" className="switch__input" tabIndex={3} />
                      <label htmlFor="switch4" className="switch__label" />
                    </div>
                    <div className="switch switch_order-1">
                      <div className="switch__name">Dining room</div>
                      <input type="checkbox" id="switch5" className="switch__input" tabIndex={2} defaultChecked />
                      <label htmlFor="switch5" className="switch__label" />
                    </div>
                    <div className="switch switch_order-2">
                      <div className="switch__name">Bedroom 3</div>
                      <input type="checkbox" id="switch6" className="switch__input" tabIndex={3} defaultChecked />
                      <label htmlFor="switch6" className="switch__label" />
                    </div>
                    <div className="switch switch_order-1">
                      <div className="switch__name">Bathroom</div>
                      <input type="checkbox" id="switch7" className="switch__input" tabIndex={2} />
                      <label htmlFor="switch7" className="switch__label" />
                    </div>
                    <div className="switch switch_order-2">
                      <div className="switch__name">WC</div>
                      <input type="checkbox" id="switch8" className="switch__input" tabIndex={3} />
                      <label htmlFor="switch8" className="switch__label" />
                    </div>
                  </div>
                </div>
              </div>
</div>

<div className="dashboard-card power">
<div className="dashboard-card__title"><span className="fa fa-bar-chart" />Power</div>
<div className="dashboad-card__content">
  <div className="dashboard-card__card-piece">
    <div className="stats__item">
      <div className="stats__title">Dolar</div>
      <div className="stats__measure">
        <div className="stats__value">14</div>
        <div className="stats__unit stats__unit_meter">m</div>
      </div>
    </div>
  </div>
  <div className="dashboard-card__card-piece">
    <div className="stats__item">
      <div className="stats__title">Euro</div>
      <div className="stats__measure">
        <div className="stats__value">49</div>
        <div className="stats__unit stats__unit_power">kw/h</div>
      </div>
    </div>
  </div>
  <div className="dashboard-card__card-piece">
    <div className="stats__item">
      <div className="stats__title">UF</div>
      <div className="stats__measure">
        <div className="stats__value">37</div>
        <div className="stats__unit stats__unit_meter">m</div>
      </div>
    </div>
  </div>
</div>
</div>