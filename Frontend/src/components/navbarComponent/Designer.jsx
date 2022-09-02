import React from 'react'

const Designer = () => {
  return (
    <div>
     <div className="hContainer">
        <div className="cParent">
          <div className="innerdesParent">
            <div className="cimgDiv">
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag.jpg?v=1598514963"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}>GUCCI</p>
              <p>UP TO 64% OFF</p>
            </div>
            <div className="desFea clothCom">
              <div>
                <h4>FEATURED DESIGNERS</h4>
              </div>
              <div className='featDiv'>
                <div style={{marginBottom:"45px"}}>
                  <p>Balenciaga</p>
                  <p>Bottega Veneta</p>
                  <p>Burberry</p>
                  <p>Celine</p>
                  <p>Chloe</p>
                  <p>Christian</p>
                  <p>Dior</p>
                  <p>Dolce &amp; Gabbana</p>
                  {/* <p>Fendi</p>
                  <p>Giuseppe Zanotti</p>
                  <p>Givenchy</p>
                  <p>Jimmy Choo</p>
                  <p>Kate Spade</p>
                  <p>Manolo Blahnik</p> */}
                </div>
                <div>
                  <p>Miu Miu</p>
                  <p>Moncler</p>
                  <p>Moose Knuckles</p>
                  <p>Moschino</p>
                  <p>Prada</p>
                  <p>Roberto Cavalli</p>
                  <p>Saint Laurent</p>
                  <p>Salvatore Ferragamo</p>
                  {/* <p>Stella McCartney</p>
                  <p>Stuart Weitzman</p>
                  <p>Tod's</p>
                  <p>Tom Ford</p>
                  <p>Valentino</p>
                  <p>Versace</p> */}
                </div>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>BY A-Z</h4>
              </div>
              <div className="DesAZ">
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
                <p>E</p>
                <p>F</p>
                <p>G</p>
                <p>H</p>
                <p>I</p>
                <p>J</p>
                <p>K</p>
                <p>L</p>
                <p>M</p>
                <p>N</p>
                <p>O</p>
                <p>P</p>
                <p>Q</p>
                <p>R</p>
                <p>S</p>
                <p>T</p>
                <p>U</p>
                <p>V</p>
                <p>W</p>
                <p>X</p>
                <p>Y</p>
                <p>Z</p>
                <p>#</p>
                <p>All</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Designer