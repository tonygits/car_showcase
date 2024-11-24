import {CarCard, CustomFilter, Hero, SearchBar, ShowMore} from "@/components";
import {fetchCars, generateRandom} from "@/utils";
import {HomeProps} from "@/types";
import {fuels, yearsOfProduction} from "@/constants";

export default async function Home({searchParams}: HomeProps) {
    const carListRes = await fetchCars({

        manufacturer: searchParams.manufacturer || 'toyota',
        model: searchParams.model || 'corolla',
        year: searchParams.year || 2020,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
    });
    const isDataEmpty = !Array.isArray(carListRes) || carListRes.length < 1 || !carListRes;
    return (
        <main className="overflow-hidden">
            <Hero/>
            <div className={'mt-12 padding-x padding-y max-width'} id={'discover'}>
                <div className={'home__text-container'}>
                    <h1 className={'text-4xl font-extrabold'}>Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div>
                <div className={'home__filters'}>
                    <SearchBar/>
                    <div className={'home__filter-container'}>
                        <CustomFilter title={'year'} options={yearsOfProduction}/>
                        <CustomFilter title={'fuel'} options={fuels}/>
                    </div>
                </div>
                {!isDataEmpty ? (
                    <section>
                        <div className={'home__cars-wrapper'}>
                            {carListRes?.map((car) => (
                                <CarCard car={car}
                                         key={`${car.make}-${car.model}-${generateRandom(5)}`}/>
                            ))}
                        </div>
                        <ShowMore pageNumber={(searchParams.limit || 10)/10}  isNext={(searchParams.limit || 10) > carListRes.length }/>
                    </section>
                ) : (
                    <div className={'home__error-container'}>
                        <h2 className={'text-black text-xl font-bold'}>No results found</h2>
                        <p>{carListRes?.message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
