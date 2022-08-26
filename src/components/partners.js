import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Partners = ({ partners }) => {
  const breakpoints = useBreakpoint()
  console.log(partners)

  return (
    
    <div>
   
   {breakpoints.sm ? 
    (
      
      <ul className="uk-list uk-list-divider uk-width-8-8" style={{marginLeft:"5.5%"}}>
           {partners.map((partner, i) => {
            
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          if (partner.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              // <div id="card-container">
              // <div id="make-3D-space">
              //   <div id="product-card" key={`partner__left__${partner.node.slug}`}>
              //       <div id="product-front">
              //       <div class="shadow"></div>
              //       <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%"}}/>
              //       <div class="image_overlay"></div>
              //       <div id="view_details">View details</div>
              //       <div class="stats">
              //           <div class="stats-container">
              //           <span class="product_price">$39</span>
              //           <span class="product_name">Adidas Originals</span>
              //           <p>Men's running shirt</p>

              //           <div class="product-options">
              //               <strong>SIZES</strong>
              //               <span>XS, S, M, L, XL, XXL</span>
              //               <strong>COLORS</strong>
              //               <div class="colors">
              //               <div class="c-blue"><span></span></div>
              //               <div class="c-red"><span></span></div>
              //               <div class="c-white"><span></span></div>
              //               <div class="c-green"><span></span></div>
              //               </div>
              //           </div>
              //           </div>
              //       </div>
              //       </div>
              //   </div>
              //   </div>
              //   </div>
              
              <div class="mobile-partner-card">
                <a href={`${partner.node.url}`}>
                <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%", paddingBottom:"25%", paddingLeft:"20%", width: "85%", textAlign:"center", margin:"auto"}}/>
                </a>
                <div class="partner-container">
                <span style={{textAlign:"center",fontWeight:"bold"}}>{`${partner.node.Name}`}</span>
                  <h4><b>John Doe</b></h4>
                </div>
              </div>
              
            );
          }
          })
          
        }

        {partners.map((partner, i) => {
            
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          let today = new Date();
        if (partner.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              // <div id="card-container">
              // <div id="make-3D-space">
              //   <div id="product-card" key={`partner__left__${partner.node.slug}`}>
              //       <div id="product-front">
              //       <div class="shadow"></div>
              //       <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%"}}/>
              //       <div class="image_overlay"></div>
              //       <div id="view_details">View details</div>
              //       <div class="stats">
              //           <div class="stats-container">
              //           <span class="product_price">$39</span>
              //           <span class="product_name">Adidas Originals</span>
              //           <p>Men's running shirt</p>

              //           <div class="product-options">
              //               <strong>SIZES</strong>
              //               <span>XS, S, M, L, XL, XXL</span>
              //               <strong>COLORS</strong>
              //               <div class="colors">
              //               <div class="c-blue"><span></span></div>
              //               <div class="c-red"><span></span></div>
              //               <div class="c-white"><span></span></div>
              //               <div class="c-green"><span></span></div>
              //               </div>
              //           </div>
              //           </div>
              //       </div>
              //       </div>
              //   </div>
              //   </div>
              //   </div>
              
              <div class="mobile-partner-card">
                <a href={`${partner.node.url}`}>
                <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%", paddingLeft:"20%", width: "85%", textAlign:"center", margin:"auto"}}/>
                </a>
                <div class="partner-container">
                <span style={{textAlign:"center",fontWeight:"bold"}}>{`${partner.node.Name}`}</span>  
                <br></br>
                <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Location}`}</span>
                <div class="links-row">
                <a class="links" href={`${partner.node.url}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/2449/2449158.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                <a class="links" href={`${partner.node.facebook}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/160/160154.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                <a class="links" href={`${partner.node.instagram}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                </div>
                </div>
              </div>
              
            );
          
        }
      })
          
    }
      
      </ul>
    )
    :
    (
      <div>
        <div class="partner-row">
          {partners.slice(0,4).map((partner, i) => {
            
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          let today = new Date();
          if (partner.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              // <div id="make-3D-space" key={`partner__left__${partner.node.slug}`}>
              //   <div id="product-card">
              //       <div id="product-front">
              //       <div class="shadow"></div>
              //       <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%"}}/>
              //       <div class="image_overlay"></div>
              //       <div id="view_details">View details</div>
              //       <div class="stats">
              //           <div class="stats-container">
              //           <span class="product_price">$39</span>
              //           <span class="product_name">Adidas Originals</span>
              //           <p>Men's running shirt</p>

              //           <div class="product-options">
              //               <strong>SIZES</strong>
              //               <span>XS, S, M, L, XL, XXL</span>
              //               <strong>COLORS</strong>
              //               <div class="colors">
              //               <div class="c-blue"><span></span></div>
              //               <div class="c-red"><span></span></div>
              //               <div class="c-white"><span></span></div>
              //               <div class="c-green"><span></span></div>
              //               </div>
              //           </div>
              //           </div>
              //       </div>
              //       </div>
              //   </div>
              //   </div>
              
              <div class="partner-card">
                <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%", paddingBottom:"25%", paddingLeft:"20%", width: "85%", textAlign:"center", margin:"auto"}}/>
                <div class="partner-container">
                <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Name}`}</span>
                  <h4><b>John Doe</b></h4>
                </div>
              </div>
              
            );
          }
          })
          
        }

        {partners.slice(0,4).map((partner, i) => {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          let today = new Date();
          console.log(today)
          
        if (partner.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              // <div id="card-container">
              // <div id="make-3D-space">
              // <a href={`${partner.node.url}`}>
              //   <div id="product-card" key={`partner__left__${partner.node.slug}`}>
              //       <div id="product-front">
              //       <div class="shadow"></div>
                    
              //       <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%"}}/>
                    
              //       <div class="image_overlay"></div>
              //       <div id="view_details">View details</div>
              //       <div class="stats">
              //           <div class="stats-container">
              //           {/* <span class="product_price">$39</span> */}
              //           <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Name}`}</span>
              //           <p>{`${partner.node.Location}`}</p>
              //           <p>{`${partner.node.facebook}`}</p>
              //           <div class="product-options">
              //               <strong>SIZES</strong>
              //               <span>XS, S, M, L, XL, XXL</span>
              //               <strong>COLORS</strong>
              //               <div class="colors">
              //               <div class="c-blue"><span></span></div>
              //               <div class="c-red"><span></span></div>
              //               <div class="c-white"><span></span></div>
              //               <div class="c-green"><span></span></div>
              //               </div>
              //           </div>
              //           </div>
              //       </div>
              //       </div>
              //   </div>
              //   </a>
              //   </div>
              //   </div>
              
              <div class="partner-card">
                <a href={`${partner.node.url}`}>
                <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%", paddingLeft:"20%", width: "85%", textAlign:"center", margin:"auto"}}/>
                </a>
                <div class="partner-container">
                <span style={{textAlign:"center",fontWeight:"bold"}}>{`${partner.node.Name}`}</span>
                <br></br>
                <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Location}`}</span>
                <div class="links-row">
                <a class="links" href={`${partner.node.url}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/2449/2449158.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                <a class="links" href={`${partner.node.facebook}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/160/160154.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                <a class="links" href={`${partner.node.instagram}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                </div>
                </div>
              </div>
              
            );
          
        }
      })
          
    }
        
          </div>


<div class="partner-row">
          {partners.slice(4,8).map((partner, i) => {
            
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          let today = new Date();
          if (partner.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              // <div id="make-3D-space" key={`partner__left__${partner.node.slug}`}>
              //   <div id="product-card">
              //       <div id="product-front">
              //       <div class="shadow"></div>
              //       <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%"}}/>
              //       <div class="image_overlay"></div>
              //       <div id="view_details">View details</div>
              //       <div class="stats">
              //           <div class="stats-container">
              //           <span class="product_price">$39</span>
              //           <span class="product_name">Adidas Originals</span>
              //           <p>Men's running shirt</p>

              //           <div class="product-options">
              //               <strong>SIZES</strong>
              //               <span>XS, S, M, L, XL, XXL</span>
              //               <strong>COLORS</strong>
              //               <div class="colors">
              //               <div class="c-blue"><span></span></div>
              //               <div class="c-red"><span></span></div>
              //               <div class="c-white"><span></span></div>
              //               <div class="c-green"><span></span></div>
              //               </div>
              //           </div>
              //           </div>
              //       </div>
              //       </div>
              //   </div>
              //   </div>
              
              <div class="partner-card">
                <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%", paddingBottom:"25%", paddingLeft:"20%", width: "85%", textAlign:"center", margin:"auto"}}/>
                <div class="partner-container">
                <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Name}`}</span>
                  <h4><b>John Doe</b></h4>
                </div>
              </div>
              
            );
          }
          })
          
        }

        {partners.slice(4,8).map((partner, i) => {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          let today = new Date();
          console.log(today)
          
        if (partner.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              // <div id="card-container">
              // <div id="make-3D-space">
              // <a href={`${partner.node.url}`}>
              //   <div id="product-card" key={`partner__left__${partner.node.slug}`}>
              //       <div id="product-front">
              //       <div class="shadow"></div>
                    
              //       <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%"}}/>
                    
              //       <div class="image_overlay"></div>
              //       <div id="view_details">View details</div>
              //       <div class="stats">
              //           <div class="stats-container">
              //           {/* <span class="product_price">$39</span> */}
              //           <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Name}`}</span>
              //           <p>{`${partner.node.Location}`}</p>
              //           <p>{`${partner.node.facebook}`}</p>
              //           <div class="product-options">
              //               <strong>SIZES</strong>
              //               <span>XS, S, M, L, XL, XXL</span>
              //               <strong>COLORS</strong>
              //               <div class="colors">
              //               <div class="c-blue"><span></span></div>
              //               <div class="c-red"><span></span></div>
              //               <div class="c-white"><span></span></div>
              //               <div class="c-green"><span></span></div>
              //               </div>
              //           </div>
              //           </div>
              //       </div>
              //       </div>
              //   </div>
              //   </a>
              //   </div>
              //   </div>
              
              <div class="partner-card">
                <a href={`${partner.node.url}`}>
                <img src={`${partner.node.logo[0].url}`} alt="" style={{padding: "5%",paddingTop:"25%", paddingLeft:"20%", width: "85%", textAlign:"center", margin:"auto"}}/>
                </a>
                <div class="partner-container">
                <span style={{textAlign:"center",fontWeight:"bold"}}>{`${partner.node.Name}`}</span>
                <br></br>
                <span class="product_name" style={{textAlign:"center"}}>{`${partner.node.Location}`}</span>
                <div class="links-row">
                <a class="links" href={`${partner.node.url}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/2449/2449158.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                <a class="links" href={`${partner.node.facebook}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/160/160154.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                <a class="links" href={`${partner.node.instagram}`}>
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" style={{width: "15px", textAlign:"center", margin:"auto"}}/>
                </a>
                </div>
                </div>
              </div>
              
            );
          
        }
      })
          
    }
        
          </div>
          </div>
    )}
     
     
    </div>
  );
};

export default Partners;
