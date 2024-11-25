"use client";
import {SearchButton, SearchManufacturer} from "./";
import React, {useState} from "react";
import Image from 'next/image'
import {useRouter} from "next/navigation";

function SearchBar() {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (manufacturer ==='' || model ==='' ) {
            return alert('Please fill in the search bar');
        }

        updateSearchParams(model.toLowerCase().trim(), manufacturer.toUpperCase().trim());
    }

    function updateSearchParams (model: string, manufacturer: string) {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model);
        } else {
            searchParams.delete('model');
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer');
        }

       const  newPathName = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathName, {scroll: false});
    }

    return (
        <form className={'searchbar'} onSubmit={handleSearch}>
            <div className={'searchbar__item'}>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses={'sm:hidden'}/>
            </div>
            <div className={'searchbar__item'}>
                <Image
                    src={'/model-icon.png'}
                    alt={'car model'}
                    height={25}
                    width={25}
                    className={'absolute w-[20px] h-[20px] ml-4'}
                />
                <input
                    type={'text'}
                    name={'model'}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder={'Model'}
                    className={'searchbar__input'}
                />
                <SearchButton otherClasses={'sm:hidden'}/>
            </div>
            <SearchButton otherClasses={'max-sm:hidden'}/>
        </form>
    );
}

export default SearchBar;