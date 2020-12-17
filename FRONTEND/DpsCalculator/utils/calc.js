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
        },
        ApplyFunc: function(arr,args,func){
            console.log(args)
            for(var i=0; i<arr.length; i++){
    
                arr[i] = func(arr[i],args);
            }
            return arr;
        },
        ApplyMult: function(arr,mult){
            if(mult === 1){
                return arr;
            }
            for(var i=0; i<arr.length; i++){
                arr[i].Roll = Math.floor(arr[i].Roll*mult);
            }
            return arr;
        },
        ApplyAdd: function(arr,add){
            if(add === 0){
                return arr;
            }
            for(var i=0; i<arr.length; i++){
                arr[i].Roll = Math.floor(arr[i].Roll+add);
            }
            return arr;
        },
        ApplySplitMult: function(arr,splitarr){
            var newarr = [];
            splitarr.forEach(function(splitar){
                arr.forEach(function(ar){
                    newarr.push(calc.roll.Roller(ar.Prob*splitar.Prob,Math.floor(ar.Roll*splitar.Roll),ar.Spec|splitar.Spec));
                }); 
            });
            return newarr;
        },
        ApplySplitAdd: function(arr,splitarr){
            var newarr = [];
            splitarr.forEach(function(splitar){
                arr.forEach(function(ar){
                    newarr.push(calc.roll.Roller(ar.Prob*splitar.Prob,Math.floor(ar.Roll+splitar.Roll),ar.Spec|splitar.Spec));
                }); 
            });
            return newarr;
        }
    },
    //end roll
    
    check: {
        //Returns elite if wearing elite void, normal if wearing normal void, and 1 if not wearing void.
        //loadout = equipment object
        MVoid: function(loadout, helmet, normal, elite){ 
            if(loadout.equipment.head === helmet && loadout.equipment.gloves === 'Void knight gloves' && (loadout.equipment.torso === 'Elite void top' || loadout.equipment.torso === 'Void knight top') && (loadout.equipment.legs === 'Elite void robe' || loadout.equipment.legs === 'Void knight robe')){
                if(loadout.equipment.torso === 'Elite void top' && loadout.equipment.legs === 'Elite void robe'){
                    return elite;
                }
                return normal;
            }
            return 1;
        },
        MMaskSalve: function(loadout, imbuedonly, mask, salve, salve_e){
            var helmets;
            var amulets;
            var amulets_e;
            if(imbuedonly){
                helmets = ['Black mask (i)','Slayer helmet (i)','Black slayer helmet (i)','Green slayer helmet (i)','Red slayer helmet (i)','Purple slayer helmet (i)','Turquoise slayer helmet (i)','Hydra slayer helmet (i)','Twisted slayer helmet (i)'];
                amulets = ['Salve amulet(i)'];
                amulets_e = ['Salve amulet(ei)'];
            } else {
                helmets = ['Black mask','Black mask (i)','Slayer helmet','Slayer helmet (i)','Black slayer helmet','Black slayer helmet (i)','Green slayer helmet','Green slayer helmet (i)','Red slayer helmet','Red slayer helmet (i)','Purple slayer helmet','Purple slayer helmet (i)','Turquoise slayer helmet','Turquoise slayer helmet (i)','Hydra slayer helmet','Hydra slayer helmet (i)','Twisted slayer helmet','Twisted slayer helmet (i)'];
                amulets = ['Salve amulet','Salve amulet(i)'];
                amulets_e = ['Salve amulet (e)','Salve amulet(ei)'];
            }
            if(amulets_e.includes(loadout.equipment.neck)){
                return salve_e;
            }
            if(amulets.includes(loadout.equipment.neck)){
                return salve;
            }
            if(helmets.includes(loadout.equipment.head) && loadout.monster.cT.includes('slayer')){
                return mask;
            }
            return 1;
        },
        MSmokeStaff: function(loadout){
            if((loadout.equipment.weapon === 'Smoke battlestaff' || loadout.equipment.weapon === 'Mystic smoke staff') && loadout.spell.smoke){
                return 1.1;
            }
            return 1;
        },
        MLightsword: function(loadout,darklight,silverlight){
            if(loadout.monster.cT.includes('demon')){
                if(loadout.equipment.weapon === 'Arclight'){
                    return 1.7;
                }
                if(loadout.equipment.weapon === 'Darklight'){
                    return darklight;
                }
                if(loadout.equipment.weapon === 'Silverlight' || loadout.equipment.weapon === 'Silverlight (dyed)'){
                    return silverlight;
                }
            }
            return 1;
        },
        MLeafyBaxe: function(loadout){
            if(loadout.monster.cT.includes('leafy')){
                if(loadout.equipment.weapon === 'Leaf-bladed battleaxe'){
                    return 1.175;
                }
            }
            return 1;
        },
        MDhcb: function(loadout){
            if(loadout.monster.cT.includes('dragon')){
                if(loadout.equipment.weapon === 'Dragon hunter crossbow'){
                    return 1.3;
                }
            }
            return 1;
        },
        MDhl: function(loadout){
            if(loadout.monster.cT.includes('dragon')){
                if(loadout.equipment.weapon === 'Dragon hunter lance'){
                    return 1.2;
                }
            }
            return 1;
        },
        MHolyWater: function(loadout){
            if(loadout.cT.includes('demon')){
                if(loadout.equipment.weapon === 'Holy water'){
                    return 1.6;
                }
            }
            return 1;
        },
        MWildyWeap: function(loadout, weapon, bonus){
            if(loadout.wilderness && (loadout.equipment.weapon === weapon || loadout.equipment.weapon === weapon + ' (u)')){
                return bonus;
            }
            return 1;
        },
        //Tbow
        MTbow: function(loadout,modifier){
            if(loadout.equipment.weapon === 'Twisted bow'){
                var calc;
                if(modifier){ //maxhit modifier
                    calc = 250 + 100*loadout.monster.cT.includes('raids');
                    calc = Math.min(calc,Math.max(loadout.monster.Ma,loadout.monster.am));
                    calc = Math.min(250,250+Math.trunc((10*3*calc/10-14)/100)-Math.trunc(Math.pow(3*calc/10-140,2)/100))/100;
                    return calc;   
                } else { //accuracy modifier
                    calc = 250 + 100*loadout.monster.cT.includes('raids');
                    calc = Math.min(calc,Math.max(loadout.monster.Ma,loadout.monster.am));
                    calc = Math.min(140,140+Math.trunc((10*3*calc/10-10)/100)-Math.trunc(Math.pow(3*calc/10-100,2)/100))/100;
                    return calc;
                }
            }
            return 1;
        },
        MObbyArmour: function(loadout){
            //TODO does staff count as melee?
            if(loadout.equipment.head === 'Obsidian helmet' && loadout.equipment.torso === 'Obsidian platebody' && loadout.equipment.legs === 'Obsidian platelegs' && (loadout.equipment.weapon === 'Tzhaar-ket-om' || loadout.equipment.weapon === 'Tzhaar-ket-om (t)' || loadout.equipment.weapon === 'Tzhaar-ket-em' || loadout.equipment.weapon === 'Toktz-xil-ak' || loadout.equipment.weapon === 'Toktz-mej-tal' || loadout.equipment.weapon === 'Toktz-xil-ek')){
                return 1.1;
            }
            return 1;
        },
        MObbyAmmy: function(loadout){
            //TODO does staff count as melee?
            if((loadout.equipment.neck === 'Berserker necklace' || loadout.equipment.neck === 'Berserker necklace (or)') && (loadout.equipment.weapon === 'Tzhaar-ket-om' || loadout.equipment.weapon === 'Tzhaar-ket-om (t)' || loadout.equipment.weapon === 'Tzhaar-ket-em' || loadout.equipment.weapon === 'Toktz-xil-ak' || loadout.equipment.weapon === 'Toktz-mej-tal' || loadout.equipment.weapon === 'Toktz-xil-ek')){
                return 1.2;
            }
            return 1;
        },
        MCrystalArmour: function(loadout,modifier){
            if(loadout.equipment.weapon === 'Crystal bow'){
                var bonus = 0;
                if(loadout.equipment.head === 'Crystal helm'){
                    bonus += 1;
                }
                if(loadout.equipment.torso === 'Crystal body'){
                    bonus += 1;
                }
                if(loadout.equipment.legs === 'Crystal legs'){
                    bonus += 1;
                }
                if(bonus === 3){
                    bonus = 5;
                }
                if(modifier){ //maxhit modifier
                    bonus = 1+bonus*0.03;
                } else { //accuracy modifier
                    bonus = 1+bonus*0.06;
                }
                return bonus;
            }
            return 1;
        },
        MChinchompa: function(loadout,stance2){
            if(loadout.targetdistance && (loadout.equipment.weapon === 'Chinchompa' || loadout.equipment.weapon === 'Red chinchompa' || loadout.equipment.weapon === 'Black chinchompa')){
                if(stance2 === 'Accurate'){
                    if(loadout.targetdistance <= 3){
                        return 0;
                    } else if (loadout.targetdistance <= 6) {
                        return 0.25;
                    } else {
                        return 0.5;
                    }
                } else if(stance2 === 'Rapid'){
                    if(loadout.targetdistance <= 3){
                        return 0.25;
                    } else if (loadout.targetdistance <= 6) {
                        return 0;
                    } else {
                        return 0.25;
                    }
                } else if(stance2 === 'Longrange'){
                    if(loadout.targetdistance <= 3){
                        return 0.5;
                    } else if (loadout.targetdistance <= 6) {
                        return 0.25;
                    } else {
                        return 0;
                    }
                }
            }
            return 0;
        },
        HasGadder: function(loadout){
            return loadout.equipment.weapon === 'Gadderhammer';
        },
        HasBrimstone: function(loadout){
            return loadout.equipment.ring === 'Brimstone ring';
        },
        HasVestaLongsword: function(loadout){
            return loadout.equipment.ring === 'Vesta\'s longsword';
        },
        HasKeris: function(loadout){
            return loadout.equipment.weapon === 'Keris'||loadout.equipment.weapon === 'Keris(p)'||loadout.equipment.weapon === 'Keris(p+)'||loadout.equipment.weapon === 'Keris(p++)';
        },
        HasVerac: function(loadout){
            if(loadout.equipment.head === 'Verac\'s helm' && loadout.equipment.torso === 'Verac\'s brassard' && loadout.equipment.legs === 'Verac\'s plateskirt' && loadout.equipment.weapon === 'Verac\'s flail'){
                if(loadout.equipment.neck === 'Amulet of the damned'){
                    return 2;
                }
                return 1;
            }
            return 0;
        },
        HasAhrim: function(loadout){
            if(loadout.equipment.head === 'Ahrim\'s hood' && loadout.equipment.torso === 'Ahrim\'s robetop' && loadout.equipment.legs === 'Ahrim\'s robeskirt' && loadout.equipment.weapon === 'Ahrim\'s staff'){
                if(loadout.equipment.neck === 'Amulet of the damned'){
                    return 2;
                }
                return 1;
            }
            return 0;
        },
        HasDharok: function(loadout){
            if(loadout.equipment.head === 'Dharok\'s helm' && loadout.equipment.torso === 'Dharok\'s platebody' && loadout.equipment.legs === 'Dharok\'s platelegs' && loadout.equipment.weapon === 'Dharok\'s greataxe'){
                if(loadout.equipment.neck === 'Amulet of the damned'){
                    return 2;
                }
                return 1;
            }
            return 0;
        },
        HasKaril: function(loadout){
            if(loadout.equipment.head === 'Karil\'s coif' && loadout.equipment.torso === 'Karil\'s leathertop' && loadout.equipment.legs === 'Karil\'s leatherskirt' && loadout.equipment.weapon === 'Karil\'s crossbow'){
                if(loadout.equipment.neck === 'Amulet of the damned'){
                    return 2;
                }
                return 1;
            }
            return 0;
        },
        MDharok: function(loadout){
            //TODO - add hitpoints
            if(calc.check.HasDharok(loadout)){
                // if(true/*TODO*/){
                //     return 1;
                // }
                return 1 + Math.max(0,loadout.playerLevel.current.Hitpoints-loadout.playerLevel.visible.Hitpoints)*loadout.playerLevel.current.Hitpoints/10000;
            }
            return 1;
        },
    },
    //end check
    
} //end of calc object

export default calc;