import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
      <div className="main">
            <div class="swiper-wrapper" style={{msTransitionDuration: '0ms'}}>
              <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style={{width: '1838px', transform: 'translate3d(0px, 0px, 0px)', opacity: '1', transitionDuration: "0ms"}}>
                <a href="/collections/lifestyle-collection">
                  <img src="https://cdn.shopify.com/s/files/1/1774/5405/t/2/assets/slide2_image.jpg?v=8343108823645162859" alt="" height='650px' width='1838px' />
                  
                    <div class="slider_caption container">
                      <div class="textblock1">
                        <h2>New 
                          <br/>Balance</h2>
                        <h3>Running Classics</h3>
                        <img src="https://cdn.shopify.com/s/files/1/1774/5405/t/2/assets/slide2_textblock_image.png?v=12714203891230436117" alt=""/>
                      </div>
                      <div class="textblock2">
                        <h2>878 90’s Running</h2>
                        <p>This is the product of intelligent tech and simplified comfort. Its silhouette remains true to the GRID family, while an overhauled diamond quilted upper shows unrivaled versatility. Wear them proudly and wear them often.</p>
                        <span class="btn">More Info</span>
                      </div>
                    </div>
                </a>
              </div>  
          </div>
          <div class="hero-area bg-overlay-black  hero-style-01 hindu-hero-bg">
            <div class="container">
            <div class="row">
              <div class="col-lg-12">
              <div class="container">
                <div class="row flexbox">
                <div class="item col-sm-3 col-xs-6">
                    <a href="/collections/best-sellers">
                      <img src="//cdn.shopify.com/s/files/1/1774/5405/t/2/assets/homepage_brand1.png?v=17849569167262597261" alt="nike" /> 
                    </a>
                </div>

                <div class="item col-sm-3 col-xs-6">
                  <a href="/collections/new-arrivals">
                    <img src="//cdn.shopify.com/s/files/1/1774/5405/t/2/assets/homepage_brand2.png?v=13740359078288236777" alt="new balance" />
                  </a>      
                </div>

                <div class="item col-sm-3 col-xs-6">
                     <a href="/collections/lifestyle-collection">
                       <img src="//cdn.shopify.com/s/files/1/1774/5405/t/2/assets/homepage_brand3.png?v=10712609280845844916" alt="adidas"/>
                     </a>
                </div>
                
                <div class="item col-sm-3 col-xs-6">
                  <a href="/collections/girls">  
                      <img src="//cdn.shopify.com/s/files/1/1774/5405/t/2/assets/homepage_brand4.png?v=17862095647593524400" alt="converce"/>
                    </a>   
                </div>

                <div class="item col-sm-3 col-xs-6">
                  <a href="/collections/boys"> 
                      <img src="//cdn.shopify.com/s/files/1/1774/5405/t/2/assets/homepage_brand5.png?v=6511091701401528291" alt="asics"/>
                    </a>
                </div>

                <div class="item col-sm-3 col-xs-6">
                  <a href="/collections/best-sellers">  
                    <img src="//cdn.shopify.com/s/files/1/1774/5405/t/2/assets/homepage_brand6.png?v=8052089820207484125" alt="saucony"/>   
                  </a>    
                </div>
                <div class="ht-btn-area hero-boder-top">
                  <a  class="hero-btn" ><Link to="/">Explore</Link></a>
              </div>
              </div>
              </div>
            </div>
            </div>
           </div>
          </div>
          <div className="container">
            <h2 class="section_heading">specials</h2>
            <div class="row product_listing__main">
              <div className="col-xs-4 item_3_1 item_2_1">
                <div className="product_item">
                  <div class="product_img">
                    <a class="img_change" href="/collections/running/products/adidas_running_alphabounce_beyond">
                      <img class="img__1" src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/adidas_running_alphabounce_beyond_1_370x370_crop_top.jpg?v=1553849230" alt="Adidas Running Alphabounce Beyond"/>
                      
                        {/* <img class="img__2" src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/adidas_running_alphabounce_beyond_2_370x370_crop_top.jpg?v=1553849230" alt="Adidas Running Alphabounce Beyond"/> */}
                    </a>
                  </div>
                  <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">Adidas Running Alphabounce Beyond</a>
                  </p>
                  </div>
                  <div className="product_prop">
                    <p class="product_price">
                      <span class="money" data-currency-usd="$19.00">$19.00</span>
                    </p>
                  </div>
                </div>
              </div>  

              <div className="col-xs-4 item_3_1 item_2_1">
                <div className="product_item">
                  <div class="product_img">
                    <a class="img_change" href="/collections/running/products/adidas_running_alphabounce_beyond">
                      <img class="img__1" src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/clarks_desert_boot_1_370x370_crop_top.jpg?v=1553849295" alt="Clarks Desert Boot"/>
                    </a>
                  </div>
                  <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">Adidas Running Alphabounce Beyond</a>
                  </p>
                  </div>
                  <div className="product_prop">
                    <p class="product_price">
                      <span class="money" data-currency-usd="$19.00">$19.00</span>
                    </p>
                  </div>
                </div>
              </div> 

              <div className="col-xs-4 item_3_1 item_2_1">
                <div className="product_item">
                  <div class="product_img">
                    <a class="img_change" href="/collections/running/products/adidas_running_alphabounce_beyond">
                      <img class="img__1" src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/converse_chuck_taylor_all_star_leather_hi_1_370x370_crop_top.jpg?v=1553849322" alt="Adidas Running Alphabounce Beyond"/>
                    </a>
                  </div>
                  <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">Adidas Running Alphabounce Beyond</a>
                  </p>
                  </div>
                  <div className="product_prop">
                    <p class="product_price">
                      <span class="money" data-currency-usd="$19.00">$19.00</span>
                    </p>
                  </div>
                </div>
              </div> 

              
            </div>
          </div>

      </div>
       )
      }        
            
            

            
            
            

               
            
        
            
            
            
            
            
            

            
            
            

                
            
        
            
            
            
            
            
            

            
            
            

                
            
        
            
            
            
            
            
            

            
            
            

              
            
        
            
            
            
            
            
            

            
            
            

              
            
        
            
            
            
            
            
            

            
            
            


            
        
            
            
            
            
            
            
        
            
            
            
            
            
            
        
   
 