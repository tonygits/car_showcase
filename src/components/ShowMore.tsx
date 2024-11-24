"use client"

import {ShowMoreProps} from "@/types";
import {useRouter} from "next/navigation";
import {CustomButton} from "./";
import {updateSearchParams} from "@/utils";

function ShowMore({pageNumber, isNext}: ShowMoreProps) {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathParams = updateSearchParams('limit', newLimit.toString());
        // Logic to fetch more cars and update the page number
        router.push(newPathParams, {scroll: false});
    };

    return (
        <div className={'w-full flex-center gap-5 mt-10'}>
            {!isNext && (
                <CustomButton
                    title={'show more'}
                    btnType={'button'}
                    containerStyles={'bg-primary-blue rounded-full text-white'}
                    handleClick={handleNavigation}
                />
            )}
            {/*{isNext && (*/}
            {/*    <button*/}
            {/*        onClick={handleNavigation}*/}
            {/*        className={'w-full px-8 py-3 text-gray-900 disabled:cursor-not-allowed'}*/}
            {/*    >*/}
            {/*        No more posts*/}
            {/*    </button>*/}
            {/*)}*/}
            {/*<span className={'text-gray-900 text-sm'}>Page {pageNumber}</span>*/}
        </div>
    );
}

export default ShowMore;
