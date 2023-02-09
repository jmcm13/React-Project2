import React from 'react';

const Contact = () => {


    return (
        <div className='container'>
            <div className='row'>
                <h2 className='center'>Contact Us</h2>
            </div>
            <div className='row'>
                <div className='col s12 center'>
                    <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col s12 center'>
                    <div className="card" style={{ display: 'inline-block', width: '50%' }}>
                        <div className="card-content">
                            <form className='container'>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i class="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" class="validate" />
                                        <label for="icon_prefix">Name</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">email</i>
                                        <input id="icon_prefix" type="email" class="validate" />
                                        <label for="icon_prefix">Email</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Textarea</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <button class="btn waves-effect waves-light right" type="submit" name="action">Submit
                                        <i class="material-icons right">send</i>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;