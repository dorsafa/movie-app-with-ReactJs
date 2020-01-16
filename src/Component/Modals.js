import { Modal } from 'antd';
import React from 'react'
import './Modal.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Card } from 'react-bootstrap'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      movieName: '',
      movieImg: '',
      movieYear: '',
      rating: '',
    }
  }

  handleInputChange = (e) => {
    let target = e.target;
    this.setState({

      [target.name]: target.value,

    });
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.props.addCard(this.state.movieName, this.state.movieImg, this.state.movieYear, this.state.rating);
    this.setState({
      visible: false,
    });
  };


  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className='form'>
            Image : <input type='text' placeholder='Enter image source' name='movieImg' value={this.state.movieImg} onChange={(e) => this.handleInputChange(e)} />
            Movie name : <input type='text' name='movieName' placeholder='Movie name' value={this.state.movieName} onChange={(e) => this.handleInputChange(e)} />
            Rating : <Rater total={5} rating={this.state.rating} onRate={(e) => this.setState({ rating: e.rating })} />
            Year : <input type='text' placeholder='2020' name='movieYear' value={this.state.movieYear} onChange={(e) => this.handleInputChange(e)} />
          </div>



        </Modal>
        <Card style={{ width: '18rem' }} onClick={this.showModal} className='movieCard' bg="light">
          <Card.Img variant="center" src='http://minecraft.smashzap.de/img/rp/fadenkreuz.png' />
        </Card>
      </div>
    );
  }
}

