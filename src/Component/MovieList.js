import React, { Component } from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import Modals from './Modals'
import { Form, FormControl, Button } from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Hoc from './LoadingHOC'


 class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            movieList: [
                { movieName: 'RENDEZ-VOUS CHEZ LES MALAWAS', rating: '3', movieImg: 'http://fr.web.img4.acsta.net/c_215_290/pictures/19/10/07/10/01/3752736.jpg', movieYear: '2019' },
                { movieName: 'Forges-les-Eaux', rating: '4', movieImg: 'https://static.actu.fr/uploads/2019/11/4169390-854x1139.jpg', movieYear: '2019' },
                { movieName: 'Chamboultout', rating: '5', movieImg: 'https://www.tourisme-stgaudens.com/wp-content/uploads/wpetourisme/Chamboultout.jpg', movieYear: '2019' },
                { movieName: 'Chamboultout', rating: '2', movieImg: 'https://local.attac.org/marseille/IMG/arton676.jpg?1574281039', movieYear: '2019' },
                { movieName: 'Ricky', rating: '3', movieImg: 'http://www.kinopitheque.net/wp-content/uploads/2018/04/Ricky.jpg', movieYear: '2009' },],

            search: '',
            rating: 0,
            loading:true,
        }
    }


    ///////////// Ajouter movie à movieList
    addCard = (name, img, year, rating) => {
        this.setState({
            movieList: [...this.state.movieList, { movieName: name, movieImg: img, movieYear: year , rating: rating}]
        })
    }

    //////////// Gérer input search  by name
    handleSearchName = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    //////////// Gérer input search  by rate
    handleSearchRate = (e) => {
        this.setState({
            rating:e.rating
        })
    }

    componentDidMount=()=>{
        setTimeout(()=>
          this.setState({
          loading:false
          }), 2000
        )
      }

    render() {
        return (
            <div >
                <div className='search'>
                    <Form inline>
                        <FormControl type="text" placeholder="Search film" className="mr-sm-2" value={this.state.search} onChange={(e) => this.handleSearchName(e)} />
                        <Button variant="info" >Search</Button>
                    </Form>
                    <div className='raterSearch'>
                        <span> Minimun rating </span>
                        <Rater total={5} rating={this.state.rating} onRate={(e)=>this.handleSearchRate(e)} />
                    </div>
                </div>

                <div className='movieList'>
                    <Modals movieList={this.state.movieList} addCard={this.addCard} />
                    {this.state.movieList.filter((el) => (
                        el.movieName.toLowerCase().includes(this.state.search.toLowerCase())
                        && (el.rating >= this.state.rating)
                    )).map((el, i) => (
                        <MovieCard list={el} key={i} />)
                    )
                    }
                </div>

            </div >
        )
    }
}

export default Hoc(MovieList);
