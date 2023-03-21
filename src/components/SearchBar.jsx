export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>onSearch("not found ID")}>Agregar</button>
      </div>
   );
}
