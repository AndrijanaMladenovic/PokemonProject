import React, { useState } from "react";
import { getPokemon } from "../service/data";
import { useEffect } from "react";
import { upperCase } from "../service/data";

import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortDescendingLetters } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import Pagination from "./Pagination";

import { useNavigate } from "react-router-dom";

export default function Main({ query, setImg, img }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const [sortType, setSortType] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [likedCards, setLikedCards] = useState(
    JSON.parse(localStorage.getItem("likedCards")) || []
  );
  const itemsPerPage = 24;
  const totalPages = 36;

  useEffect(() => {
    getPokemon().then((data) => {
      const mapped = data.map((item, index) => ({
        name: item.name,
        url: item.url,
        index: index,
      }));
      setItems(mapped);
    });
  }, []);

  const fetchPokemonData = () => {
    getPokemon().then((data) => {
      const mapped = data.map((item, index) => ({
        name: item.name,
        url: item.url,
        index: index,
      }));
      setItems(mapped);
    });
  };

  const sortPokemonData = () => {
    getPokemon().then((data) => {
      const mapped = data.map((item, index) => ({
        name: item.name,
        url: item.url,
        index: index,
      }));

      const sorted = mapped.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      if (!sortType) {
        sorted.reverse();
      }

      setItems(sorted);
    });
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedCards");
    if (storedLikes) {
      setLikedCards(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  }, [likedCards]);

  const filterItems = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPokemonData = filterItems.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPokemonImageUrl = (pokemonNumber) =>
    `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
      pokemonNumber
    ).padStart(3, "0")}.png`;

  const handleLike = (cardId) => {
    if (!likedCards.includes(cardId)) {
      setLikedCards([...likedCards, cardId]);
    }
  };

  const deleteLike = (cardId) => {
    const updatedLikedCards = likedCards.filter((id) => id !== cardId);
    setLikedCards(updatedLikedCards);
  };

  const sortNameAtoZ = () => {
    setSortType(!sortType);
    sortPokemonData();
  };

  const handleRestart = () => {
    fetchPokemonData();
  };

  console.log(img);

  if (items) {
    return (
      <>
        <div className="flex gap-5 p-5">
          <button
            onClick={sortNameAtoZ}
            className=" px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {sortType == true ? (
              <AiOutlineSortAscending className=" w-6 h-6" />
            ) : (
              <TbSortDescendingLetters className=" w-6 h-6" />
            )}
          </button>

          <button
            onClick={handleRestart}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <GrPowerReset className=" w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 m-11">
          {currentPokemonData.map((pokemon) => (
            <div className="bg-red-200 flex flex-col align-middle items-center py-5 border rounded">
              <img
                onClick={() => {
                  navigate(`/${pokemon.name}`);
                  setImg(
                    `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
                      pokemon.index + 1
                    ).padStart(3, "0")}.png`
                  );
                }}
                src={getPokemonImageUrl(pokemon.index + 1)}
                alt={pokemon.name}
              />
              <p
                className="text-white text-xl font-bold capitalize"
                id={pokemon.url.slice(34)}
                key={pokemon.name}>
                {pokemon.name}
              </p>
              <button
                className={
                  likedCards.includes(startIndex + pokemon.index + 1)
                    ? "flex items-center bg-blue-600 text-white font-bold border rounded p-2"
                    : "flex items-center bg-red-600 text-white font-bold border rounded p-2"
                }
                id={startIndex + pokemon.index + 1}
                onClick={() => {
                  handleLike(startIndex + pokemon.index + 1);
                }}
                disabled={likedCards.includes(startIndex + pokemon.index + 1)}>
                <AiFillLike className="text-white font-bold" />
                <p className=" font-bold text-white">
                  {`Like (${
                    likedCards.includes(startIndex + pokemon.index + 1) ? 1 : 0
                  })`}
                </p>
              </button>
              {likedCards.includes(startIndex + pokemon.index + 1) ? (
                <div
                  onClick={() => {
                    deleteLike(startIndex + pokemon.index + 1);
                  }}
                  className="flex items-center  gap-1">
                  <AiFillDislike className=" text-red-500" />
                  <p className=" text-red-500 text-center">Dislike</p>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      </>
    );
  }
}
