import React from 'react';
import Timeline from './Timeline';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: '',
            newChirp: '',
            chirps: [
                {
                    name: "Shelby",
                    message: "Gimme all the books"
                },
                {
                    name: "Kristen",
                    message: "Gozer!  No, bad kitty."
                },
                {
                    name: "David",
                    message: "LET'S GOOOOOOO!"
                }
            ]
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.newChirp);
        this.setState({ 
            newChirp: '' 
            //newUser: [...this.state.newUser, {id:uuid4(), newUser: this.state.newUser}]
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <form className="from-group">
                            <label>Chirp!</label>
                            <input
                                value={this.state.newChirp}
                                onChange={e => this.setState({ newChirp: e.target.value })}
                                className="form-control"
                            />
                            <button onClick={e => this.handleSubmit(e)} className="btn btn-primary mt-3">
                                Add Chirp!
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {/* {this.state.newChirp.map(newChirp=> (
                                <li></li>
                            ))} */}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;