export class FormErrorObject 
{
  

    constructor(
        public albumError : boolean = false,
        public titleError : boolean = false,
        public thumbnailError : boolean = false,
        public imageError : boolean = false
    )
    {}
}