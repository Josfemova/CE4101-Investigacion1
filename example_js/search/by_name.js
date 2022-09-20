function search_by_name(uc_data, pattern){
    let results = []
    let regex = new RegExp(pattern)
    uc_data.forEach(element => {
        if(regex.test(element.name)){
            results.push(element)
        }
    });
    return results
};

module.exports = {search_by_name};