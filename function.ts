function str_len(value: string): number{
    let num: number = value.length;
    return num;
    }
    function str_len_nospaces(value: string): number{
        let num: number = value.trim().length;
        return num;
        }
        console.log("String length with spaces and all is: "+str_len("test 1"));
        console.log("String length with spaces not included in the count: "
        +str_len_nospaces(" test 1 "));
        function str_len_both(value: string, spaces?: boolean): number{
        //note ? for optional parameter,
        //so will default to false due to
        //code in the function, but I could
        //change from optional and provide
        //a default to the parameter by writing
        //the signature as
        //function str_len_both(value: string, spaces: boolean=false): number{
        let num: number;
        if(spaces){
        num = value.trim().length;
        }else{
        num = value.length;
        }
        return num;
        }
        console.log("Function combined: String length with spaces and all is:"+str_len_both("test 1",false));
        console.log("Function combined: String length with spaces not included in the count: "+str_len_both("test 1", true));
        console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: "+str_len_both("test 1"));