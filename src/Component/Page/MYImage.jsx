import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const MYImage = ({ imgs = [{ url: "" }] }) => {
    console.log("first", imgs)
    const [ mainImage, setMainImage ] = useState(imgs[0])
    return (
        <div>
            <Wrapper>
                <div className="grid grid-four-column">
                    {
                        imgs.map((curElem, index) => {
                            return (
                                <figure key={index}>
                                    <img src={curElem.url} alt={curElem.filename}
                                        className="box-image--style"
                                        onClick={() => setMainImage(curElem)} />
                                </figure>
                            )
                        })
                    }
                </div>
                <div className="main-screen">
                    <img src={mainImage.url} alt={mainImage.filename} />
                </div>




            </Wrapper>


        </div>
    )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
     
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
     
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }


  }
`;
export default MYImage