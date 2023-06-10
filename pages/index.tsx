import React, { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export async function getServerSideProps() {
    let { data } = await supabase.from('countries').select();

    return {
        props: {
            countries: data,
        },
    };
}

const index = (countries: any) => {

    useEffect(() => {
        console.log(countries.countries)
    })

    return (
        <div>
            <h1>Oi Supabase after AppicFest</h1>
            <ul>
                {countries.countries.map((country: any) => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default index;
