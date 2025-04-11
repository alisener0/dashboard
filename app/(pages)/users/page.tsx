import Loader from "@/component/loaders/Loader"
import  Title  from '@/component/title';
import  Table  from '@/component/table';
import {Suspense} from "react"
import Modal from "./modal"
//! loading sadece page dosyalarında calışıyormuş

type Props = {
  searchParams: Record <string, string> | undefined | null;
};

const Users = async ( {searchParams}: Props ) => {

  console.log(searchParams)

  return (
    <div>
<Title>Kullanıcılar</Title>

<Suspense fallback={<Loader designs="mt-20" />}>
<Table />
</Suspense>
{/* eğer url de show parametresi varsa ekrana modal bas*/}
{searchParams?.show  && <Modal id={searchParams.show}/> }

    </div>
      

    
  );
};

export default Users;

