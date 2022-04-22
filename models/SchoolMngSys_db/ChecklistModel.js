import ChecklistModelGenerated from "./generated/ChecklistModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ChecklistModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ChecklistModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ChecklistModelGenerated,
  ...customModel
};
