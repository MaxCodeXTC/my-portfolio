import React from 'react'
import {ProjectPicture} from '../Cards/ProjectPicture'
import {ProjectInfo} from '../Cards/ProjectInfo'
import {Link} from 'react-router-dom'
import '../Home.css'
class Projects extends React.Component {
    

    state = {showing: true}


  handleToggle = () => {
    this.setState({showing: !this.state.showing})
  }

  
    render() {
        return (
                <div className='projects-container'>
                <h1 className='projects-header' id='projects'>Recent Work</h1>
                <h4 className='h4-for-message'>Here are a few projects I've worked on. Want to see more? <Link to='' onClick={() => window.open('https://github.com/JordanLong1')}>Github</Link></h4>
                    {this.state.showing ? 
                    <div className='project-pics-and-info' onClick={this.handleToggle}>
                        <h4 className='proj-title'>Corner Store Clothing</h4>
                    <ProjectPicture title='Corner Store' image={'../corner.png'} />
                    <button className='git-btn' onClick={ () =>  window.open('https://github.com/JordanLong1/corner_store', '_blank') }>Github</button>
                    <button className='youtube-btn' onClick={() => window.open('https://www.youtube.com/watch?v=unZXhgV5Y3o&t=14s', '_blank') }>Youtube</button>
                    </div>
                     :  <div className='project-info-div' onClick={this.handleToggle}>
                     <ProjectInfo title='Corner Store Clothing' titleDescription='Basic Shopping cart / e-commerce type with the ability to add and remove items to a from a cart.' description='Created the rails API to accomplish fetching product data and present it to the client. Used OO Javascript to build out the frontend and fetch data from the API. Implemented various CSS animations to refine the overall presentation of the project' technologies='OO Javascript, Ruby on Rails, HTML, CSS' /> 
                         </div>
                        }

                        {this.state.showing? 
                    <div className='project-pics-and-info' onClick={this.handleToggle}>
                    <h4 className='proj-title'>Innovative Ag Solutions</h4>
                    <ProjectPicture title='Innovative Ag Solutions' image={'../innovative.png'}/>
                    <button className='git-btn' onClick={() => window.open('https://github.com/JordanLong1/innovative-ag-solutions', '_blank')}>Github</button>
                    <button className='youtube-btn' onClick={() => window.open('https://www.youtube.com/watch?v=Z0wrPzTlfMU&t=1s', '_blank')}>Youtube</button>
                    </div>
                    :
                    <div className='project-info-div' onClick={this.handleToggle}>
                        <ProjectInfo title='Innovative Ag Solutions' titleDescription='Consultation web app for a PCA (Pest Control Advisor) to manage and consult their farmers/growers crops.' description='Centralized state management by using the Redux store to store all state information and for better scalability. Engineered client side routing with BrowserRouter from the React-Router library to accelerate navigation. Executed Single-Table-Inheritance to achieve the capability of having multiple user types (grower and salesman)' image={'../innovative.png'} technologies='Ruby on Rails, React and Redux, Semantic UI for styling.'/>
                    </div>
                    }
                    {this.state.showing ? 
                    <div className='project-pics-and-info' onClick={this.handleToggle}>
                    <h4 className='proj-title'>Optimal CRM</h4>
                    <ProjectPicture title='Optimal CRM' image={'../optimal.png'}/>
                    <button className='git-btn' onClick={() => window.open('https://github.com/JordanLong1/optimal_crm', '_blank')}>Github</button>
                    <button className='youtube-btn' onClick={() => window.open('https://www.youtube.com/watch?v=9qApp5xO-8s&t=53s', '_blank')}>Youtube</button>
                    </div>
                    : 
                    <div className='project-info-div' onClick={this.handleToggle}>
                    <ProjectInfo title='Optimal CRM' titleDescription='Fake CRM with the ability for a salesrepresentative to keep track of leads, tasks, and companies.' description='Achieved the usage of model, view, controller (MVC) design pattern for separation of concerns within the application. Demonstrated CRUD (create, read, update, delete) to implement a persistent storage application. Maximized user security measures with implementing Bcrypt to safely store and salt user passwords.' technologies='Ruby on Rails'/>
                    </div>
                         }
                </div>
        )
    }
}

export default Projects