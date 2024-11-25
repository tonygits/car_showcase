import {CarCard, CustomFilter, Hero, SearchBar, ShowMore} from "@/components";
import {fetchCars, generateRandom} from "@/utils";
import {fuels, yearsOfProduction} from "@/constants";
import {FilterProps} from "@/types";

type Params = Promise<FilterProps>

export default async function Home(HomeProps: {searchParams: Params}) {
    const params = await HomeProps.searchParams;
    const carListRes = await fetchCars({
        manufacturer: params.manufacturer || 'toyota',
        model: params.model || 'corolla',
        year: params.year || 2020,
        fuel: params.fuel || '',
        limit: params.limit || 10,
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
                        <ShowMore pageNumber={(params.limit || 10)/10}  isNext={(params.limit || 10) > carListRes.length }/>
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
