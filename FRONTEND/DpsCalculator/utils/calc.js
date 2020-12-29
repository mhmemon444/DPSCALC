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
        MGuardians: function(loadout){
            //TODO: Mining level
            //TODO: What happens if not using pickaxe?
            if(loadout.monster.im === 'Guardian (Chambers of Xeric, Challenge Mode)' || loadout.monster.im === 'Guardian (Chambers of Xeric)'){
                var weapon = Math.min(61,loadout.wepMiningLvl || 0);
                var level = Math.min(100,loadout.playerLevel.current.Mining || 1); //TODO
                return (50+level+weapon)/150;
            }
            return 1;
        },
        //TODO Check "ontask"
        MaxMagicDart: function(loadout){
            var staves = ['Slayer\'s staff','Slayer\'s staff (e)','Toxic staff of the dead','Toxic staff (uncharged)','Staff of the dead','Staff of balance','Staff of light'];
            if(staves.includes(loadout.equipment.weapon)){
                if(loadout.equipment.weapon === 'Slayer\'s staff (e)' && loadout.monster.cT.includes('slayer')){
                    return Math.floor(13+loadout.playerLevel.visible.Magic/6);
                }
                return Math.floor(10+loadout.playerLevel.visible.Magic/10);
            }
            return 0;
        },
        MaxTrident: function(loadout){
            if(loadout.equipment.weapon === 'Trident of the seas' || loadout.equipment.weapon === 'Trident of the seas (e)'){
                return Math.max(1,Math.floor(loadout.playerLevel.visible.Magic/3 - 5));
            } else if(loadout.equipment.weapon === 'Trident of the swamp' || loadout.equipment.weapon === 'Trident of the swamp (e)' || loadout.equipment.weapon === 'Uncharged toxic trident' || loadout.equipment.weapon === 'Uncharged toxic trident (e)'){
                return Math.max(4,Math.floor(loadout.playerLevel.visible.Magic/3 - 2));
            } else if(loadout.equipment.weapon === 'Sanguinesti staff' || loadout.equipment.weapon === 'Sanguinesti staff (beta)'){
                return Math.max(5,Math.floor(loadout.playerLevel.visible.Magic/3 - 1));
            } else if(loadout.equipment.weapon === 'Starter staff'){
                return 8;
            } else {
                return false;
            }
        },
        MaxSalamander: function(loadout){
            if(loadout.equipment.weapon === 'Black salamander'){
                return Math.floor(0.5+loadout.playerLevel.visible.Magic*0.24375);
            }
            if(loadout.equipment.weapon === 'Red salamander'){
                return Math.floor(0.5+loadout.playerLevel.visible.Magic*0.2203125);
            }
            if(loadout.equipment.weapon === 'Orange salamander'){
                return Math.floor(0.5+loadout.playerLevel.visible.Magic*0.1921875);
            }
            if(loadout.equipment.weapon === 'Swamp lizard'){
                return Math.floor(0.5+loadout.playerLevel.visible.Magic*0.1875);
            }
            return false;
        },
        MChaosGauntlet: function(loadout){
            if(loadout.slot.label.gloves === 'Chaos gauntlets' && loadout.spell.bolt){
                return 3;
            }
            return 0;
        },
        MTomeOfFire: function(loadout){
            if(loadout.slot.label.shield === 'Tome of fire' && loadout.spell.fire){
                return 1.5;
            }
            return 1;
        },
        MCastleWars: function(loadout){
            if(loadout.monster.cT.includes('castle wars flagholder')){
                return 1.2;
            }
            return 1;
        },
    },
    //end check
    naiveDPS: function(accarr,rollmin,rollmax,typeless,ticks){
        //TODO: Scythe
        var dps = 0;
        for(var i = 0; i < accarr.length; i++) {
            var hit;
            if(accarr[i].Spec & 8){
                hit = (rollmax[i].Roll + rollmin[i].Roll)/2 + Math.floor((rollmax[i].Roll + rollmin[i].Roll)/2)/2;
            } else {
                hit = (rollmax[i].Roll + rollmin[i].Roll)/2;
            }
            dps += accarr[i].Prob*accarr[i].Roll*hit+typeless;
        }
        return dps/ticks/0.6;
    },
    accuracy: function(aroll,droll){
        if(aroll>droll){
            return 1-(droll+2)/(2*aroll+2);
        }
        return aroll/(2*droll+2);
    },
    accuracies: function(arollers,drollers){
        var newarr = [];
        arollers.forEach(function(aroller){
            var roll;
            if(aroller.Spec & 1){ //guaranteed hit
                roll = 1;
            } else if (aroller.Spec & 6){ //Dinh's (2) or invalid (4)
                roll = 0;
            } else {
                roll = 0;
                drollers.forEach(function(droller){
                    roll += droller.Prob*calc.accuracy(aroller.Roll,droller.Roll);
                }); 
            }
            newarr.push(calc.roll.Roller(aroller.Prob,roll,aroller.Spec));
        });
        return newarr;
    },
    monsterDefence: function(loadout,style,spec){
        var roll;
        // if(style === 'dmagic'){
        if(style === 'dm'){
            roll = [calc.roll.Roller(1,Math.floor((loadout.monster.Ma+9)*(64+loadout.monster.dm)),0)]; //changed dmagic to dm
            if(calc.check.HasBrimstone(loadout)){
                roll = calc.roll.ApplySplitMult(roll,[calc.roll.Roller(0.75,1,0),calc.roll.Roller(0.25,0.9,0)]);
            }
        } else {
            roll = [calc.roll.Roller(1,Math.floor((loadout.monster.De+9)*(64+loadout.monster[style])),0)];
            if(spec && calc.check.HasVestaLongsword(loadout)){
                roll = calc.roll.ApplyMult(roll,0.25);
            }
        }
        return roll;

    },
    playerMaxHit: function(loadout){
        //Todo: Ba level to min + max hit
        //Todo: Holy water
        //todo: Bolts
        //Todo: Clarify which dragons are fiery

        var res = loadout.combatStyle.match(/^(.*) - (.*)$/);
        if(!(res && ['Stab','Slash','Crush','Ranged','Magic','Block'].includes(res[2]) && ['Accurate','Aggressive','Defensive','Shared','Rapid','Longrange','Spell','Defensive Spell'].includes(res[1]))){
            // if(loadout.slot.combatStyleLoadout in equipment.combatStyleLoadout){
            //     res = equipment.combatStyleLoadout[loadout.slot.combatStyleLoadout][0].match(/^(.*) - (.*)$/);
            // } else {
            //     res = 'Stab - Accurate'.match(/^(.*) - (.*)$/);
            // }
            res = 'Accurate - Stab'.match(/^(.*) - (.*)$/);
        }
        var stance1 = res[2];
        var stance2 = res[1];

        var rollmax;
        var rollmin = [calc.roll.Roller(1,0,0)];
        var typeless = 0; //dmg even if miss
        var attackticks = loadout.attackSpeed;
        var args;
        var tomeoffire = 1;

        if (stance1 === 'Block') {
            rollmax = [calc.roll.Roller(1, 0, 2)];
        } else if (stance1 === 'Ranged') {
            rollmax = [calc.roll.Roller(1, loadout.playerLevel.visible.Ranged, 0)];
            loadout.prayersArr.forEach(function (prayer) {
                rollmax = calc.roll.ApplyMult(rollmax, prayer.RangedStrengthBonus || 1);
            });
            rollmax = calc.roll.ApplyAdd(rollmax, 8);
            if (stance2 === 'Accurate') {
                rollmax = calc.roll.ApplyAdd(rollmax, 3);
            } else if (stance2 === 'Rapid') {
                attackticks -= 1;
            }
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MVoid(loadout, 'Void ranger helm', 1.1, 1.125));
            rollmax[0].Roll = Math.floor(0.5 + rollmax[0].Roll * (64 + loadout.equipmentBonus.br) / 640); //cheating out of laziness
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MMaskSalve(loadout, true, 1.15, 1.15, 1.2));
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MDhcb(loadout));
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MHolyWater(loadout));
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MWildyWeap(loadout, 'Craw\'s bow', 1.5));
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MTbow(loadout, true));
            rollmax = calc.roll.ApplyMult(rollmax, calc.check.MCrystalArmour(loadout, true));
            if (calc.check.HasKaril(loadout)) {
                rollmax = calc.roll.ApplySplitAdd(rollmax, [calc.roll.Roller(0.75, 0, 0), calc.roll.Roller(0.25, 0, 8)]);
                rollmin = calc.roll.ApplySplitAdd(rollmin, [calc.roll.Roller(0.75, 0, 0), calc.roll.Roller(0.25, 0, 0)]);
            }
        } else if(stance1 === 'Magic') {
            if(stance2 === 'Spell' || stance2 === 'Defensive Spell'){
                attackticks = loadout.attackSpeed;
                if(loadout.spell.name === 'Magic Dart'){
                    args = calc.check.MaxMagicDart(loadout);
                    rollmax = [calc.roll.Roller(1,args,args ? 0 : 4)];
                } else {
                    rollmax = [calc.roll.Roller(1,loadout.spell.mh,loadout.spell.mh ? 0 : 4)];
                    calc.roll.ApplyAdd(rollmax,calc.check.MChaosGauntlet(loadout));
                    tomeoffire = calc.check.MTomeOfFire(loadout);
                }
            } else {
                args = calc.check.MaxTrident(loadout);
                if(args === false){
                    args = calc.check.MaxSalamander(loadout);
                }
                if(args === false){
                    rollmax = [calc.roll.Roller(1,0,4)];
                } else {
                    rollmax = [calc.roll.Roller(1,args,0)];
                }
            }
            var mbns = loadout.equipmentBonus.bm;
            var mask = 1;
            mbns += calc.check.MSmokeStaff(loadout);
            args = calc.check.MMaskSalve(loadout,true,0,1.15,1.2);
            if(args === 0){
                mask = 1.15;
            } else {
                args = args - 1;
            }
            mbns += args;
            mbns += calc.check.MWildyWeap(loadout,'Thammaron\'s sceptre',1.25)-1;
            mbns += calc.check.MVoid(loadout,'Void mage helm',1,1.025)-1;
            rollmax = calc.roll.ApplyMult(rollmax,mbns);
            rollmax = calc.roll.ApplyMult(rollmax,tomeoffire);
            rollmax = calc.roll.ApplyMult(rollmax,mask);
            if(calc.check.HasAhrim(loadout) === 2){
                rollmax = calc.roll.ApplySplitMult(rollmax,[calc.roll.Roller(0.75,1,0),calc.roll.Roller(0.25,1.3,0)]);
                rollmin = calc.roll.ApplySplitAdd(rollmin,[calc.roll.Roller(0.75,0,0),calc.roll.Roller(0.25,0,0)]);
            }


        } else {
            rollmax = [calc.roll.Roller(1,loadout.playerLevel.visible.Strength,0)];
            loadout.prayersArr.forEach(function (prayer) {
                rollmax = calc.roll.ApplyMult(rollmax, prayer.StrengthBonus || 1);
            });
            rollmax = calc.roll.ApplyAdd(rollmax,8);
            if(stance2 === 'Aggressive'){
                rollmax = calc.roll.ApplyAdd(rollmax,3);
            } else if(stance2 === 'Shared') {
                rollmax = calc.roll.ApplyAdd(rollmax,1);
            }
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MVoid(loadout,'Void melee helm',1.1,1.1));
            rollmax[0].Roll = Math.floor(0.5+rollmax[0].Roll*(64+loadout.equipmentBonus.bs)/640);
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MMaskSalve(loadout,true,7/6,7/6,1.2));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MLightsword(loadout,1.6,1.5/*???TODO???*/));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MLeafyBaxe(loadout));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MDhl(loadout));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MWildyWeap(loadout,'Viggora\'s chainmace',1.5));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MObbyArmour(loadout));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MObbyAmmy(loadout)); //which order with obsidian?
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MDharok(loadout));
            rollmax = calc.roll.ApplyMult(rollmax,calc.check.MGuardians(loadout));
            if(calc.check.HasGadder(loadout)){
                rollmax = calc.roll.ApplySplitMult(rollmax,[calc.roll.Roller(0.95,1.25,0),calc.roll.Roller(0.05,2,0)]);
                rollmin = calc.roll.ApplySplitAdd(rollmin,[calc.roll.Roller(0.95,0,0),calc.roll.Roller(0.05,0,0)]);
            }
            if(calc.check.HasKeris(loadout)){
                rollmax = calc.roll.ApplySplitMult(rollmax,[calc.roll.Roller(50/51,4/3,0),calc.roll.Roller(1/51,3,0)]);
                rollmin = calc.roll.ApplySplitAdd(rollmin,[calc.roll.Roller(50/51,0,0),calc.roll.Roller(1/51,0,0)]);
            }
            if(calc.check.HasVerac(loadout)){
                rollmax = calc.roll.ApplySplitAdd(rollmax,[calc.roll.Roller(0.75,0,0),calc.roll.Roller(0.25,1,1)]);
                rollmin = calc.roll.ApplySplitAdd(rollmin,[calc.roll.Roller(0.75,0,0),calc.roll.Roller(0.25,1,1)]);
            }
        }
        rollmax = calc.roll.ApplyMult(rollmax,calc.check.MCastleWars(loadout));
        //TODO: If ba, typeless += attack level
        console.log("rollmin: ", rollmin);
        console.log("rollmax: ", rollmax);
        console.log("typeless: ", typeless);
        console.log("attackticks: ", attackticks);

        return [rollmin,rollmax,typeless,attackticks];

    },
    
} //end of calc object

export default calc;