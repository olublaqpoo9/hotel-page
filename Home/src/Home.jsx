import React, { useState } from 'react'
import './Home.css'

function Home ()  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [messages, setMessages] = useState("");



    const getFormData = (e) => {
        e.preventDefault();
    };

    const submitFormData = () =>{
        console.log(name, email, number, messages)
        setName("");
        setEmail("");
        setNumber("");
        setMessages("");
    }

  return (
    <div className='body' >
         <div className='Hero-section'>
             <div className='nav'>
                 <div className='logo'>MetroHaven</div>
                 <div className='link'>
                <ul>
        
                </ul>
            </div>
            <div className='registration-button'>
                <button id='sign-up'>SIGN UP</button>
                <button id='Login'>LOGIN</button>
            </div>
        </div>
        <div className='Hero-title'>
            <p id='h1'> Experience Home <br /> Designed For Comfort</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vero magni hic laboriosam <br /> eaque illo eum dolorem velit quibusdam libero ipsa cumque, pariatur aspernatu.</p>
            <div className='Hero-button'>
                <button id='book-now'>Book now</button>
                <button id='explore'>Explore</button>
            </div>
        </div>
         </div>
         <div className='second-section'>
            <div className='left-side'><h2>Discover Your Perfect <br /> <span id='highlight1'>Property Match</span></h2></div>
            <div className='right-side'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident perferendis sed quam <br /> voluptas suscipit, illo accusamus minus reiciendis, dolore debitis eaque, fugit culpa. Excepturi, tempora <br /> pariatur? Nihil recusandae voluptatem voluptates illum minima a fuga tempore! Est, at! Aspernatur <br /> quasi numquam reiciendis adipisci illo recusandae tempora maxime nihil totam deleniti?</p></div>
         </div>
         <div className='third-page'>
            <div className='left-side'>
                <div className='main'>
                        <div className='details'>
                        <span id='p-tag'>$950,000 </span> 
                        <br />
                        <p>Loveland Street</p>
                        <p>San Fransisco</p>
                        <p>CA 04133</p>
                </div>
                </div>

            </div>
            <div className='right-side'>
                <div className='top'>
                    <div id='left'>
                        <div id='details'>
                        <span id='p-tag'>$600,000 </span> 
                        <br />
                        <p>Loveland Street</p>
                        <p>San Fransisco</p>
                        <p>CA 04133</p>
                        </div>
                    </div>
                    <div id='right'>
                        <div id='details'>
                        <span id='p-tag'>$750,000 </span> 
                        <br />
                        <p>Loveland Street</p>
                        <p>San Fransisco</p>
                        <p>CA 04133</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div id='details'>
                        <span id='p-tag'>$1,000,000 </span> 
                        <br />
                        <p>Loveland Street</p>
                        <p>San Fransisco</p>
                        <p>CA 04133</p>
                        </div>
                 </div>
            </div>
         </div>
         <div className='fourth-page'>
            <div className='fourth-main'>
                <div className='about'>
                    <h1>About <span>Us</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi perferendis autem maxime aspernatur, laboriosam delectus voluptate praesentium, accusamus fugit amet voluptates suscipit! Nisi hic, earum consequatur nam officiis modi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatem, perspiciatis commodi autem adipisci laborum quo exercitationem accusantium ea nam.
                    </p>
                </div>
                <div className='image'>

                </div>
            </div>
         </div>
         <div className='form-page' >
            <div className='form-main' >
                <h2>Send us your feedback - we value your opinion</h2>
                <form onSubmit={getFormData}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'  /> <br />  <br />
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder='Email' /> <br /> <br />
                    <input type="number" value={number} onChange={(e) =>setNumber(e.target.value) } placeholder='Room Number '  /> <br /> <br />
                    <textarea name="text" id="messages" value={messages} onChange={(e)=> setMessages(e.target.value) } rows={10} cols={60} placeholder='Feedback' ></textarea> <br />

                    <button onClick={submitFormData} >Submit</button>
                </form>
            </div>
         </div>
    </div>

  )
};

export default Home 