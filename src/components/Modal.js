import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

function Modal({ modalState, setModalState }) {
  const closeModal = () =>
    setModalState({
      visibility: false,
      pokemonSelected: {},
    });


  return (
    <>
      {modalState.visibility && (
        <Overlay>
          <ContainerModal>
            <HeadModal>
              <h3>{modalState.pokemonSelected.name}</h3>
              <ExitBotom onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </ExitBotom>
            </HeadModal>
            <InfoPokemon>
              <ContendSprite>
                {modalState.pokemonSelected.sprites ? (
                  <img
                    src={modalState.pokemonSelected.sprites.front_default}
                    alt={modalState.pokemonSelected.name}
                  />
                ) : (
                  <></>
                )}
              </ContendSprite>
              <ContendStats>
                <h3>Stats</h3>
                <p>
                  <span>{modalState.pokemonSelected.stats[0].stat.name}:</span>{" "}
                  {modalState.pokemonSelected.stats[0].base_stat} pts
                </p>
                <p>
                  <span>{modalState.pokemonSelected.stats[1].stat.name}:</span>{" "}
                  {modalState.pokemonSelected.stats[1].base_stat} pts
                </p>
                <p>
                  <span>{modalState.pokemonSelected.stats[2].stat.name}:</span>{" "}
                  {modalState.pokemonSelected.stats[2].base_stat} pts
                </p>
                <p>
                  <span>{modalState.pokemonSelected.stats[3].stat.name}:</span>{" "}
                  {modalState.pokemonSelected.stats[3].base_stat} pts
                </p>
                <p>
                  <span>{modalState.pokemonSelected.stats[4].stat.name}:</span>{" "}
                  {modalState.pokemonSelected.stats[4].base_stat} pts
                </p>
                <p>
                  <span>{modalState.pokemonSelected.stats[5].stat.name}:</span>{" "}
                  {modalState.pokemonSelected.stats[5].base_stat} pts
                </p>
              </ContendStats>
              <ContendTypes>
                <h3>Types</h3>
                {modalState.pokemonSelected.types.map((type) => {
                  return <p key={v4()}>{type.type.name}</p>;
                })}
              </ContendTypes>
            </InfoPokemon>
          </ContainerModal>
        </Overlay>
      )}
    </>
  );
}

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);

  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerModal = styled.div`
  width: 500px;
  min-height: 100px;
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  padding: 20px;
`;

const HeadModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ff8591;
  h3 {
    font-weight: bold;
    font-size: 20px;
    color:#ff8591;
    text-transform: capitalize;
  }
  
`;

const ExitBotom = styled.button`
  position: absolute;
  color: #ff8591;
  right: 15px;
  top: 15px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: none;
  cursor: pointer;
  transition: 0.1s ease all;
  border-radius: 5px;
  &:hover {
    background: rgb(187, 187, 187);
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const InfoPokemon = styled.div`
  display: grid;
  grid-template-areas:
    "sprite stats "
    "sprite types";
  grid-gap:10px;

  @media (max-width: 550px) {
    flex-direction: column;
    grid-template-areas:
    "sprite sprite"
    "stats types"
    ;
  }
`;

const ContendSprite = styled.div`
  grid-area: sprite;
  img{
    width: 200px;
    height:200px ;
  }
  display:flex ;
  justify-content:center ;
  align-items:center ;
`;

const ContendStats = styled.div`
  grid-area: stats;
  height:100% ;
  width:100% ;
  h3{
    margin-bottom: 5px;
  }
  p{
    text-transform:capitalize ;
  }
  padding:10px ;
  border-bottom:1px solid #ff8591;
  @media (max-width: 550px) {
    border:none ;
    border-right: 1px solid #ff8591;
    p{
      font-size:0.7rem ;
    }
  }
`;

const ContendTypes = styled.div`
  grid-area: types;
  height:100% ;
  padding:10px ;
  h3{
    margin-bottom: 5px;
  }
  p{
    text-transform:capitalize ;
  }

  @media (max-width: 550px) {
    p{
      font-size:0.7rem ;
    }
  }
`;
