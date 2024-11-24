"use client"
import {SearchManufacturerProps} from "@/types";
import {Combobox, Transition, Button, ComboboxInput, ComboboxOptions, ComboboxOption} from "@headlessui/react";
import Image from "next/image";
import {Fragment, useState} from "react";
import {manufacturers} from "@/constants";

function SearchManufacturer({manufacturer, setManufacturer}: SearchManufacturerProps) {
    const [query, setQuery] = useState('');
    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    ))
    return (
        <div className={'search-manufacturer'}>
            <Combobox
            value={manufacturer}
            onChange={setManufacturer}
            >
                <div className={'relative w-full'}>
                    <Button className={'absolute top-[14px]'}>
                        <Image
                            src={'/car-logo.svg'}
                            alt={'car-logo'}
                            width={20}
                            height={20}
                            className={'ml-4'}
                        />
                    </Button>
                    <ComboboxInput
                        className={'search-manufacturer__input'}
                        placeholder={'Volkswagen'}
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom={'opacity-100'}
                        leaveTo={'opacity-0'}
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions>
                            {
                                filteredManufacturers.map((item) => (
                                    <ComboboxOption
                                        className={({focus}) => `relative search-manufacturer__option ${focus ? `bg-primary-blue text-white` : `text-gray-500`}`}
                                        key={item}
                                        value={item}>
                                        {({selected, focus}) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0  flex items-center pl-3 ${focus ? 'text-white' : 'text-teal-500'}`}>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}

export default SearchManufacturer;