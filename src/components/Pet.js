import React from 'react'

class Pet extends React.Component {

  clickAdoptPet = (e) => {
    const id = e.target.id
    this.props.onAdoptPet(id)
  }
  
  render() {
    
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? "♀" : "♂"}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.pet.isAdopted &&
            
              <button id={this.props.pet.id} className="ui primary button" onClick={this.clickAdoptPet}>Adopt pet</button> 
          }
           {this.props.pet.isAdopted &&
            
            <button className="ui disabled button">Already adopted</button> 
          }
         
        </div>
      </div>
    )
  }
}

export default Pet

