import React from 'react'
import './Home.css'

function Home ()  {
  return (
    <body>
         <div className='Hero-section'>
             <div className='nav'>
                 <div className='logo'>MetroHaven</div>
                 <div className='link'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Property</li>
                    <li>Blogs</li>
                    <li>Contact us</li>
                    <li>About us</li>
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
        <div className='Date-section'>
            <div className='pay-button'>
                <button id='buy'>Buy</button>
                <button id='rent'>Rent</button>
            </div>
            <div className='time'>
                <div> <h2>Location</h2> <p>Long Beach California</p> </div>
                <div> <h2>Start</h2> <p>Dec 12, 10:30PM</p> </div>
                <div> <h2>End</h2> <p>Dec 20 , 10:30PM</p> </div>
                <button>
                    <img width={25} src="./s2.png" alt="" />
                </button>
            </div>
            <div className='testimony'>
                <div><h1>200</h1> <p>Award <br /> Winning</p> </div>
                <div><h1>500+</h1> <p>Happy <br /> Customers</p></div>
                <div> <h1>100+</h1> <p>Property <br /> Ready</p> </div>
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
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, velit! Neque dolore ratione perferendis earum alias, harum doloremque esse. Eveniet, aperiam explicabo esse quod, magni quis ea doloremque ad fuga quaerat sit voluptatibus maxime dolorum quae animi exercitationem quidem dolores sequi doloribus quam. Doloremque voluptatem est obcaecati provident! Unde, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi explicabo accusantium eveniet fugiat enim iste pariatur assumenda. Laboriosam accusamus necessitatibus perspiciatis molestiae reprehenderit quos corrupti, amet quae, delectus inventore sunt praesentium ab itaque, animi alias vero labore magnam? Temporibus amet non, ipsa corporis, illum eius dolore, deleniti sunt debitis nobis aliquam ab! Nostrum quod quia at veniam quae. Cum. </p>
                </div>
                <div className='image'>

                </div>
            </div>
         </div>
    </body>

  )
};

export default Home 