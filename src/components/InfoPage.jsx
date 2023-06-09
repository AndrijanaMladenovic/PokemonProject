import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getInfo } from "../service/data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InfoPage({ img }) {
  let { pokemon } = useParams();
  const [items, setItems] = useState([]);

  const getPokemonInfo = async () => {
    const data = await getInfo(pokemon);
    setItems(data);
  };
  useEffect(() => {
    getPokemonInfo();
  }, [pokemon]);

  if (items) {
    return (
      <>
        <div className=" flex items-center h-20 p-4 bg-red-500 justify-around">
          <Link to="/">
            <img className=" w-24" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex justify-center gap-8 items-center pt-8">
          <img className=" w-96" src={img} alt="" />
          <div className="flex flex-col gap-8">
            <div>
              <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
                Name
              </h1>
              <p className="capitalize text-center text-red text-2xl">
                {items.name}
              </p>
            </div>
            <div>
              <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
                Abilities
              </h1>
              <p className="text-center text-red text-2xl">
                {items.abilities?.map((item) => {
                  return <p className="capitalize">{item.ability.name}</p>;
                })}
              </p>
            </div>
            <div>
              <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
                Type
              </h1>
              <p className="text-center text-red text-2xl capitalize">
                {items.types?.map((item) => {
                  return <p>{item.type.name}</p>;
                })}
              </p>
            </div>
            <div>
              <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
                Stats
              </h1>
              <p className="text-center text-red text-2xl">
                {items.stats?.map((item) => {
                  return (
                    <p className=" capitalize">
                      {item.stat.name}({item.base_stat})
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
