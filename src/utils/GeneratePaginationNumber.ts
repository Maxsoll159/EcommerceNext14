//[1,2,3, "...", "50"]
export const generatePagination = (currentPage: number, totalPage: number) =>{
    //SI EL NUMERO TOTAL DE PAGINAS ES 7 O MENOS
    //VAMOS A MOSTRAR LAS PAGINAS SIN PUNTOS SUSPENSIVOS
    if(totalPage <= 7){
        return Array.from({length: totalPage}, (_,i) => i + 1)
    }
    //si la pagina actual esta entre las primeras 3 paginas
    //mostrar las primeras 3, puntos suspensibos    
    if(currentPage<=3){
        return [1,2,3,'...', totalPage - 1, totalPage]
    }
    //SI LA PAGINA ACTUAL ESTA ENTRE LAS ULTIMAS 3 PAGINAS
    //MOSTRAR LAS PRIMERAS 2 PUNTOS SUSPOENSIVO Y LKAS ULTIAMS 3
    if(currentPage>=totalPage - 2){
        return [1,2, '...', totalPage - 2, totalPage - 1, totalPage]
    }
    //SI LA PAGINA ACTUAL ESTA EN OTRO LUGAR MEDIO
    //MOSTRAR LA PRIMERA PAGINA, PUNTOS SUSPENSIVOS, LA PAGINA ACTUAL VECINOS
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...",  totalPage]

}