import React from "react";
export const Header = (props) => {
  const renderViewIcon = () => {
    return props.stateView ? <i className="material-icons">view_module</i> : <i className="material-icons">view_list</i>
  }

  return (

    <nav>
      <div className="nav-wrapper">
        <div className="container">
        <div className="row">
          <a href="#!" className="brand-logo center">React Users</a>
          <ul className="right hide-on-med-and-down">
            <li><a onClick={props.onChangeViewClick}>{renderViewIcon()}</a></li>
            <li><a onClick={props.onRefresh}><i className="material-icons">refresh</i></a></li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

{/* <form>
            <div class="input-field">
              <input id="search" type="search" required />
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form> */}