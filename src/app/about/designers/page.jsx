import Card from '@/app/components/card';
import React from 'react';

const DesignersPage = () => {

    const user = ['arif','shubo','a','asd','kad','aksd','adfk','skdfj'];

    return (
        <div>

           <div className='grid grid-cols-3 gap-4'>
             {
               user.map( (user,ind) => <Card key= {ind}></Card> )
            }
           </div>
        </div>
    );
};

export default DesignersPage;