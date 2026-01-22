import { useNavigate } from "react-router-dom";

export default function CollectionCard({ className = "", id,collection }) {
  const navigate = useNavigate();
  const handleProductView = () => {
    if(!id) return;
    navigate(`/collection/${id}`);
  };
  
  return (
      <div
        className={`md:w-90 flex flex-col justify-end items-center p-4 bg-[url('/bg-collection.webp')] bg-size-[115%] bg-center transition-[background-size] duration-500 ease-in-out hover:bg-size-[130%] hover:shadow-2xl ${className}`}
      >
        {collection && <h1 className="text-black font-bold shadow-md text-2xl bg-black-300/40 px-2">{collection}</h1>}
        <button
          onClick={handleProductView}
          className="py-4 px-6 w-fit m-4 bg-white border border-main text-primary hover:bg-gray-200"
        >
          SEE IT MORE
        </button>
      </div>
  );
}
