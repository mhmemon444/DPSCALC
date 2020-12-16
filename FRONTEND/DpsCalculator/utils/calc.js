var calc = {
    roll: {
        Roller: function(probability,roll,special){
            var _this = {
                'Prob':probability, //Percentage chance of this roll occurring
                'Roll':roll, //Value of the roll (e.g. attack roll or max hit)
                'Spec':special, //Special parameter:
                //  1 = 100% accurate
                //  2 = Dinh's
                //  4 = invalid parameters (e.g. Invalid Magic Dart)
                //  8 = Karil proc (2nd hitsplat with 50% damage)
                //  16 = Scythe hit 2
                //  32 = Scythe hit 3
                //  
            };
            return _this;
        }
    }
}

export default calc;