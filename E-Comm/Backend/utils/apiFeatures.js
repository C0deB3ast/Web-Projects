class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
     
      this.query = this.query.find({...keyword});
      return this;
  }

  filter() {
    const qurreyCopy = {...this.queryStr}; //This line of code creates a shallow copy of the queryStr object using the spread operator.
    // Any modifications made to queryCopy will not affect the original queryStr object.

    // removing some fields for category
    const removeFields = ["keyword","page","limit"];

    removeFields.forEach(key=>delete qurreyCopy[key]);

    //filter for price and rating
  
  let queryStr = JSON.stringify(qurreyCopy);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;

     
  } 
}

export default ApiFeatures;
