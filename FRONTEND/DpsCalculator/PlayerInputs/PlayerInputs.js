import React from 'react';
import EquipmentPanel from './EquipmentPanel/EquipmentPanel';
import PrayerPanel from './PrayerPanel/PrayerPanel';
import SkillsPanel from './SkillsPanel/SkillsPanel';
import StylesPanel from './StylesPanel/StylesPanel';
import SpellsPanel from './SpellsPanel/SpellsPanel';
import BoostsPanel from './BoostsPanel/BoostsPanel';
import './PlayerInputs.css'


import Tab from './Tab/Tab';

const TABS = [
    "Combat",
    "Skills",
    "Equipment",
    "Potions",
    "Prayers"
];

const ATK_STYLE_MAP = {
    slash: "Chop",
    axe: "Chop",
    blunt: "Pound",
    bulwark: "Pummel",
    claws: "Chop",
    polearm: "Jab",
    pickaxe: "Spike",
    scythe: "Reap",
    spear: "Lunge",
    spiked: "Pound",
    stab: "Stab",
    twohanded: "Chop",
    whip: "Flick",
    bow: "Accurate",
    chinchompa: "Short fuse",
    crossbow: "Accurate",
    thrown: "Accurate",
    bladedstaff: "Jab",
    staff: "Bash",
    poweredstaff: "Accurate",
    polestaff: "Bash",
    salamander: "Scorch",
    unarmed: "Punch"
}

const COMBAT_STYLE_MAP = {
    slash: "Accurate - Slash",
    axe: "Accurate - Slash",
    blunt: "Accurate - Crush",
    bulwark: "Accurate - Crush",
    claws: "Accurate - Slash",
    polearm: "Shared - Stab",
    pickaxe: "Accurate - Stab",
    scythe: "Accurate - Slash",
    spear: "Shared - Stab",
    spiked: "Accurate - Crush",
    stab: "Accurate - Stab",
    twohanded: "Accurate - Slash",
    whip: "Accurate - Slash",
    bow: "Accurate - Ranged",
    chinchompa: "Accurate - Ranged",
    crossbow: "Accurate - Ranged",
    thrown: "Accurate - Ranged",
    bladedstaff: "Accurate - Stab",
    staff: "Accurate - Crush",
    poweredstaff: "Accurate - Magic",
    polestaff: "Accurate - Crush",
    salamander: "Aggressive - Slash",
    unarmed: "Accurate - Crush"
}

class PlayerInputs extends React.Component {
    state = {
        //selected Tabs:
        Combat: false,
        Skills: false,
        Equipment: true, //default selected
        Potions: false,
        Prayers: false,

        //Prayers:
        // selectedPrayers: [

        // ],

        //Selected gear: (transferred to parent component (DpsCalculator))
        cape: null,
        head: null,
        neck: null,
        ammo: null,
        weapon: null,
        body: null,
        shield: null,
        legs: null,
        hands: null,
        feet: null,
        ring: null,

        //Player stats:
        username: "",

        //Attack styles:
        selectedStyle1: true,
        selectedStyle2: false,
        selectedStyle3: false,
        selectedStyle4: false,
        selectedStyle5: false,
        selectedOptionName: "Punch",

        //Spells:
        openSpellsTab: false,
        selectedSpell: null,
        spellbook: "regular",

        //Stat boosts:
        
        // strSelectedBoost: null,
        // attSelectedBoost: null,
        // defSelectedBoost: null,
        // rangeSelectedBoost: null,
        // mageSelectedBoost: null,
        // otherSelectedBoost: null,
        // boostedRange: 99,
        // boostedDef: 99,
        // boostedStr: 99,
        // boostedMage: 99,
        // boostedAtt: 99
    }

    componentDidMount() {
        //get cape from localStorage
        const cape_value = localStorage.getItem('dpscalcwikirs_cape_value');
        const cape_label = localStorage.getItem('dpscalcwikirs_cape_label');
        const cape_icon = localStorage.getItem('dpscalcwikirs_cape_icon');
        var cape_full = null;
        if (cape_value != '' && cape_label != '' && cape_icon != '') {
            cape_full = {
                value: cape_value,
                label: cape_label,
                icon: cape_icon
            }
        }
        if (cape_value == null || cape_label == null || cape_icon == null) {
            cape_full = null;
        }

        //get helmet from localStorage
        const helm_value = localStorage.getItem('dpscalcwikirs_helm_value');
        const helm_label = localStorage.getItem('dpscalcwikirs_helm_label');
        const helm_icon = localStorage.getItem('dpscalcwikirs_helm_icon');
        var helm_full = null;
        if (helm_value != '' && helm_label != '' && helm_icon != '') {
            helm_full = {
                value: helm_value,
                label: helm_label,
                icon: helm_icon
            }
        }
        if (helm_value == null || helm_label == null || helm_icon == null) {
            helm_full = null;
        }

        //get neck from localStorage
        const neck_value = localStorage.getItem('dpscalcwikirs_neck_value');
        const neck_label = localStorage.getItem('dpscalcwikirs_neck_label');
        const neck_icon = localStorage.getItem('dpscalcwikirs_neck_icon');
        var neck_full = null;
        if (neck_value != '' && neck_label != '' && neck_icon != '') {
            neck_full = {
                value: neck_value,
                label: neck_label,
                icon: neck_icon
            }
        }
        if (neck_value == null || neck_label == null || neck_icon == null) {
            neck_full = null;
        }

        //set ammo from localStorage
        const ammo_value = localStorage.getItem('dpscalcwikirs_ammo_value');
        const ammo_label = localStorage.getItem('dpscalcwikirs_ammo_label');
        const ammo_icon = localStorage.getItem('dpscalcwikirs_ammo_icon');
        var ammo_full = null;
        if (ammo_value != '' && ammo_label != '' && ammo_icon != '') {
            ammo_full = {
                value: ammo_value,
                label: ammo_label,
                icon: ammo_icon
            }
        }
        if (ammo_value == null || ammo_label == null || ammo_icon == null) {
            ammo_full = null;
        }

        //set wep from localStorage
        const weapon_value = localStorage.getItem('dpscalcwikirs_weapon_value');
        const weapon_label = localStorage.getItem('dpscalcwikirs_weapon_label');
        const weapon_icon = localStorage.getItem('dpscalcwikirs_weapon_icon');
        const weapon_type = localStorage.getItem('dpscalcwikirs_weapon_type');
        const weapon_twoh = localStorage.getItem('dpscalcwikirs_weapon_twohanded');
        var weapon_full = null;
        if (weapon_value != '' && weapon_label != '' && weapon_icon != '') {
            weapon_full = {
                value: weapon_value,
                label: weapon_label,
                icon: weapon_icon,
                type: weapon_type
            }
            if (weapon_twoh == 'true') {
                weapon_full.twohanded = true
            }
        }
        if (weapon_value == null || weapon_label == null || weapon_icon == null) {
            weapon_full = null;
        }

        //set body from localStorage
        const body_value = localStorage.getItem('dpscalcwikirs_body_value');
        const body_label = localStorage.getItem('dpscalcwikirs_body_label');
        const body_icon = localStorage.getItem('dpscalcwikirs_body_icon');
        var body_full = null;
        if (body_value != '' && body_label != '' && body_icon != '') {
            body_full = {
                value: body_value,
                label: body_label,
                icon: body_icon
            }
        }
        if (body_value == null || body_label == null || body_icon == null) {
            body_full = null;
        }

        //set shield from localStorage
        const shield_value = localStorage.getItem('dpscalcwikirs_shield_value');
        const shield_label = localStorage.getItem('dpscalcwikirs_shield_label');
        const shield_icon = localStorage.getItem('dpscalcwikirs_shield_icon');
        var shield_full = null;
        if (shield_value != '' && shield_label != '' && shield_icon != '') {
            shield_full = {
                value: shield_value,
                label: shield_label,
                icon: shield_icon
            }
        }
        if (shield_value == null || shield_label == null || shield_icon == null) {
            shield_full = null;
        }

        //set legs from localStorage
        const legs_value = localStorage.getItem('dpscalcwikirs_legs_value');
        const legs_label = localStorage.getItem('dpscalcwikirs_legs_label');
        const legs_icon = localStorage.getItem('dpscalcwikirs_legs_icon');
        var legs_full = null;
        if (legs_value != '' && legs_label != '' && legs_icon != '') {
            legs_full = {
                value: legs_value,
                label: legs_label,
                icon: legs_icon
            }
        }
        if (legs_value == null || legs_label == null || legs_icon == null) {
            legs_full = null;
        }

        //set hands from localStorage
        const hands_value = localStorage.getItem('dpscalcwikirs_hands_value');
        const hands_label = localStorage.getItem('dpscalcwikirs_hands_label');
        const hands_icon = localStorage.getItem('dpscalcwikirs_hands_icon');
        var hands_full = null;
        if (hands_value != '' && hands_label != '' && hands_icon != '') {
            hands_full = {
                value: hands_value,
                label: hands_label,
                icon: hands_icon
            }
        }
        if (hands_value == null || hands_label == null || hands_icon == null) {
            hands_full = null;
        }

        //set feet from localStorage
        const feet_value = localStorage.getItem('dpscalcwikirs_feet_value');
        const feet_label = localStorage.getItem('dpscalcwikirs_feet_label');
        const feet_icon = localStorage.getItem('dpscalcwikirs_feet_icon');
        var feet_full = null;
        if (feet_value != '' && feet_label != '' && feet_icon != '') {
            feet_full = {
                value: feet_value,
                label: feet_label,
                icon: feet_icon
            }
        }
        if (feet_value == null || feet_label == null || feet_icon == null) {
            feet_full = null;
        }

        //set ring from localStorage
        const ring_value = localStorage.getItem('dpscalcwikirs_ring_value');
        const ring_label = localStorage.getItem('dpscalcwikirs_ring_label');
        const ring_icon = localStorage.getItem('dpscalcwikirs_ring_icon');
        var ring_full = null;
        if (ring_value != '' && ring_label != '' && ring_icon != '') {
            ring_full = {
                value: ring_value,
                label: ring_label,
                icon: ring_icon
            }
        }
        if (ring_value == null || ring_label == null || ring_icon == null) {
            ring_full = null;
        }

        console.log(ring_full);

        //styles
        const selectedStyle = localStorage.getItem('dpscalcwikirs_selectedstyle');
        const selectedOpt = localStorage.getItem('dpscalcwikirs_selectedoption');

        //spells
        const n = localStorage.getItem('dpscalcwikirs_selectedSpellName');
        const r = localStorage.getItem('dpscalcwikirs_selectedSpellRsrc');
        var selSpell = {
            name: n,
            rsrc: r
        }
        if (n == null || r == null) {
            selSpell = null;
        }

        this.setState({
            cape: cape_full,
            head: helm_full,
            neck: neck_full,
            ammo: ammo_full,
            weapon: weapon_full,
            body: body_full,
            shield: shield_full,
            legs: legs_full,
            hands: hands_full,
            feet: feet_full,
            ring: ring_full,
            selectedStyle1: false,
            selectedStyle2: false,
            selectedStyle3: false,
            selectedStyle4: false,
            selectedStyle5: false,
            [selectedStyle]: true,
            selectedOptionName: selectedOpt,
            selectedSpell: selSpell == '' ? null : selSpell
        }, () => {
            console.log(this.state.head);
            // this.props.setGear("shield", this.state.shield);
            // this.props.setGear("cape", this.state.cape); //update parent component with selected gear label
            // this.props.setGear("head", this.state.head); //update parent component with selected gear label
            // this.props.setGear("neck", this.state.neck); //update parent component with selected gear label
            // this.props.setGear("ammo", this.state.ammo); //update parent component with selected gear label
            // this.props.setGear("weapon", this.state.weapon); //update parent component with selected gear label
            // this.props.setGear("torso", this.state.body); //update parent component with selected gear label
            // this.props.setGear("gloves", this.state.hands); //update parent component with selected gear label
            // this.props.setGear("boots", this.state.feet); //update parent component with selected gear label
            // this.props.setGear("ring", this.state.ring); //update parent component with selected gear label
        })
    }

    selectTabHandler = (tab) => {
        this.setState({
            Combat: false,
            Skills: false,
            Equipment: false,
            Potions: false,
            Prayers: false
        }, () => {
            this.setState({
                [tab]: true,
                openSpellsTab: false
            }, () => {console.log(this.state)})
        })
    }


    //Equipment tab
    setCape = (capeObj) => {
        var previous = this.state.cape;
        this.setState({cape: (capeObj.value == "Nothing") ? null : capeObj}, () => {
            console.log(this.state)
             
            this.props.calcAttributes(this.state.cape, "cape", previous); //update equipment attributes
            this.props.setGear("cape", this.state.cape); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_cape_value', this.state.cape != null ? this.state.cape.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_cape_label', this.state.cape != null ? this.state.cape.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_cape_icon', this.state.cape != null ? this.state.cape.icon : ''); //save to browser localStorage
        })
    }

    setHead = (headObj) => {
        var previous = this.state.head;
        this.setState({head: (headObj.value == "Nothing") ? null : headObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.head, "head", previous); //update equipment attributes
            this.props.setGear("head", this.state.head); //update parent component with selected gear label
            
            localStorage.setItem('dpscalcwikirs_helm_value', this.state.head != null ? this.state.head.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_helm_label', this.state.head != null ? this.state.head.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_helm_icon', this.state.head != null ? this.state.head.icon : ''); //save to browser localStorage
        })
    }

    setNeck = (neckObj) => {
        var previous = this.state.neck;
        this.setState({neck: (neckObj.value == "Nothing") ? null : neckObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.neck, "neck", previous); //update equipment attributes
            this.props.setGear("neck", this.state.neck); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_neck_value', this.state.neck != null ? this.state.neck.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_neck_label', this.state.neck != null ? this.state.neck.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_neck_icon', this.state.neck != null ? this.state.neck.icon : ''); //save to browser localStorage
        })
    }

    setAmmo = (ammoObj) => {
        var previous = this.state.ammo;
        this.setState({ammo: (ammoObj.value == "Nothing") ? null : ammoObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.ammo, "ammo", previous); //update equipment attributes
            this.props.setGear("ammo", this.state.ammo); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_ammo_value', this.state.ammo != null ? this.state.ammo.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_ammo_label', this.state.ammo != null ? this.state.ammo.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_ammo_icon', this.state.ammo != null ? this.state.ammo.icon : ''); //save to browser localStorage
        })
    }

    setWep = (wepObj) => {
        var previous = this.state.weapon;
        console.log("wepObj.type: ", wepObj.type);

        var sh = this.state.shield;
        if (sh != null) {
            if ("twohanded" in wepObj) {
                sh = null; //turn off 2h wep when shield equipped
                this.props.setGear("shield", sh);
                this.props.calcAttributes(null, "shield", this.state.shield); //update equipment attributes
                
                localStorage.setItem('dpscalcwikirs_shield_value', sh != null ? sh.value : ''); //save to browser localStorage
                localStorage.setItem('dpscalcwikirs_shield_label', sh != null ? sh.label : ''); //save to browser localStorage
                localStorage.setItem('dpscalcwikirs_shield_icon', sh != null ? sh.icon : ''); //save to browser localStorage
            }
        }

        this.setState({
            weapon: (wepObj.value == "Nothing") ? null : wepObj,
            shield: sh, //if 2h wep selected, remove shield
            selectedStyle1: true,
            selectedStyle2: false,
            selectedStyle3: false,
            selectedStyle4: false,
            selectedStyle5: false,
            selectedOptionName: ATK_STYLE_MAP[wepObj.type],
            selectedSpell: null
        }, () => {
            //console.log(this.state)
            this.props.setGear("weapon", this.state.weapon); //update parent component with selected gear label

            this.props.setCombatStyle(COMBAT_STYLE_MAP[wepObj.type]); //pass style to parent for dps loadout
            this.props.calcAttributes(this.state.weapon, "weapon", previous); //update equipment attributes

            localStorage.setItem('dpscalcwikirs_weapon_value', this.state.weapon != null ? this.state.weapon.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_weapon_label', this.state.weapon != null ? this.state.weapon.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_weapon_icon', this.state.weapon != null ? this.state.weapon.icon : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_weapon_type', this.state.weapon != null ? this.state.weapon.type : ''); //save to browser localStorage

            if (this.state.weapon == null) {
                localStorage.setItem('dpscalcwikirs_weapon_twohanded', '') //save to browser localStorage
            } else if ("twohanded" in this.state.weapon) {
                localStorage.setItem('dpscalcwikirs_weapon_twohanded', 'true'); //save to browser localStorage
            } else {
                localStorage.setItem('dpscalcwikirs_weapon_twohanded', 'false'); //save to browser localStorage
            }

            localStorage.setItem('dpscalcwikirs_selectedstyle', 'selectedStyle1'); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_selectedoption', this.state.selectedOptionName); //save to browser localStorage        
        })
    }

    setBody = (bodyObj) => {
        var previous = this.state.body;
        this.setState({body: (bodyObj.value == "Nothing") ? null : bodyObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.body, "torso", previous); //update equipment attributes
            this.props.setGear("torso", this.state.body); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_body_value', this.state.body != null ? this.state.body.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_body_label', this.state.body != null ? this.state.body.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_body_icon', this.state.body != null ? this.state.body.icon : ''); //save to browser localStorage
        })
    }

    setShield = (shieldObj) => {
        var previous = this.state.shield;
        var wep = this.state.weapon;
        var set = false;
        if (wep != null) {
            if ("twohanded" in this.state.weapon) {
                wep = null; //turn off 2h wep when shield equipped
                set = true;
                this.props.setGear("weapon", wep);
                this.props.setCombatStyle(COMBAT_STYLE_MAP["unarmed"]); //pass style to parent for dps loadout
                this.props.calcAttributes(null, "weapon", this.state.weapon); //update equipment attributes

                localStorage.setItem('dpscalcwikirs_weapon_value', wep != null ? wep.value : ''); //save to browser localStorage
                localStorage.setItem('dpscalcwikirs_weapon_label', wep != null ? wep.label : ''); //save to browser localStorage
                localStorage.setItem('dpscalcwikirs_weapon_icon', wep != null ? wep.icon : ''); //save to browser localStorage
                localStorage.setItem('dpscalcwikirs_weapon_type', wep != null ? wep.type : ''); //save to browser localStorage
                localStorage.setItem('dpscalcwikirs_weapon_twohanded', wep != null ? wep.twohanded : ''); //save to browser localStorage
            }
        }

        this.setState({
            shield: (shieldObj.value == "Nothing") ? null : shieldObj,
            weapon: wep,
            selectedStyle1: set ? true : this.state.selectedStyle1,
            selectedStyle2: set ? false : this.state.selectedStyle2,
            selectedStyle3: set ? false : this.state.selectedStyle3,
            selectedStyle4: set ? false : this.state.selectedStyle4,
            selectedStyle5: set ? false : this.state.selectedStyle5,
            selectedOptionName: set ? "Punch" : this.state.selectedOptionName,
            selectedSpell: set ? null : this.state.selectedSpell
        }, () => {
            //console.log(this.state)
            console.log("selectedOptionName: ", this.state.selectedOptionName);
            this.props.setGear("shield", this.state.shield); //update parent component with selected gear label
            
            this.props.calcAttributes(this.state.shield, "shield", previous); //update equipment attributes

            localStorage.setItem('dpscalcwikirs_shield_value', this.state.shield != null ? this.state.shield.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_shield_label', this.state.shield != null ? this.state.shield.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_shield_icon', this.state.shield != null ? this.state.shield.icon : ''); //save to browser localStorage
            
        })
    }

    setHands = (handsObj) => {
        var previous = this.state.hands;
        this.setState({
            hands: (handsObj.value == "Nothing") ? null : handsObj
        }, () => {
            //console.log(this.state)
            this.props.calcAttributes(this.state.hands, "gloves", previous); //update equipment attributes
            this.props.setGear("gloves", this.state.hands); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_hands_value', this.state.hands != null ? this.state.hands.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_hands_label', this.state.hands != null ? this.state.hands.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_hands_icon', this.state.hands != null ? this.state.hands.icon : ''); //save to browser localStorage
        })
    }

    setFeet = (feetObj) => {
        var previous = this.state.feet;
        this.setState({feet: (feetObj.value == "Nothing") ? null : feetObj}, () => {
            //console.log(this.state)
            this.props.calcAttributes(this.state.feet, "boots", previous); //update equipment attributes
            this.props.setGear("boots", this.state.feet); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_feet_value', this.state.feet != null ? this.state.feet.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_feet_label', this.state.feet != null ? this.state.feet.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_feet_icon', this.state.feet != null ? this.state.feet.icon : ''); //save to browser localStorage
        })
    }

    setRing = (ringObj) => {
        var previous = this.state.ring;
        this.setState({ring: (ringObj.value == "Nothing") ? null : ringObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.ring, "ring", previous); //update equipment attributes
            this.props.setGear("ring", this.state.ring); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_ring_value', this.state.ring != null ? this.state.ring.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_ring_label', this.state.ring != null ? this.state.ring.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_ring_icon', this.state.ring != null ? this.state.ring.icon : ''); //save to browser localStorage
        })
    }

    setLegs = (legsObj) => {
        var previous = this.state.legs;
        this.setState({legs: (legsObj.value == "Nothing") ? null : legsObj}, () => {
            console.log(this.state)
            this.props.calcAttributes(this.state.legs, "legs", previous); //update equipment attributes
            this.props.setGear("legs", this.state.legs); //update parent component with selected gear label

            localStorage.setItem('dpscalcwikirs_legs_value', this.state.legs != null ? this.state.legs.value : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_legs_label', this.state.legs != null ? this.state.legs.label : ''); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_legs_icon', this.state.legs != null ? this.state.legs.icon : ''); //save to browser localStorage
        })
    }


    //Player skills tab
    usernameChangeHandler = (event) => {
        const uName = event.target.value.slice(0, 30);
        this.setState({
            username: uName
        }, () => {
            console.log(this.state)
        })
    }



    
    //Attack styles tab
    onSelectHandler = (selectedOption, selectedName, style) => {
        this.setState({
        selectedStyle1: false,
        selectedStyle2: false,
        selectedStyle3: false,
        selectedStyle4: false,
        selectedStyle5: false,
        [selectedOption]: true,
        selectedOptionName: selectedName,
        openSpellsTab: (selectedName == "Spell" || selectedName == "Spell (Def)") ? true : false
        }, () => {
            if (!(selectedName == 'Spell' || selectedName == 'Spell (Def)')) {
                this.props.setCombatStyle(style); //pass style to parent for dps loadout
            }
            localStorage.setItem('dpscalcwikirs_selectedstyle', selectedOption); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_selectedoption', selectedName); //save to browser localStorage   
        })
    }



    //Spells tab
    selectSpellHandler = (spellName, spellImg, spell) => {
        const spellObj = {
            name: spellName,
            rsrc: spellImg
        }

        this.setState({
            selectedSpell: spellObj, //e.g. selectedSpell: {name: "Fire Blast", rsrc: "((...base64 image code))"}
            openSpellsTab: false //close spellsTab after selecting spell
        }, () => {
            //console.log(this.state)
            
            this.props.setSpell(spell, this.state.selectedOptionName);

            localStorage.setItem('dpscalcwikirs_selectedSpellName', this.state.selectedSpell.name); //save to browser localStorage
            localStorage.setItem('dpscalcwikirs_selectedSpellRsrc', this.state.selectedSpell.rsrc); //save to browser localStorage   
            
        })
    }

    spellbookSwapHandler = () => {
        this.setState({
            spellbook: (this.state.spellbook == "regular") ? "ancients" : "regular"
        })
    }

    render() {
        const tabs = TABS.map(tabType => {
            return <Tab type={tabType} selected={this.state[tabType]} click={this.selectTabHandler}/>
        })

        return (
            <div className="playerinputs">

                <div style={{ textAlign: 'center', marginTop: '5px' }}><span className="playerinputstext">Player Inputs</span></div>

                <div className="inputTabs">
                    {tabs}
                </div>

                { this.state.openSpellsTab ? <SpellsPanel spellbook={this.state.spellbook} swapSpellbook={this.spellbookSwapHandler} selectSpell={this.selectSpellHandler} weapon={this.state.weapon}/> 
                : this.state.Equipment ? <EquipmentPanel setChinDistance={this.props.setChinDistance} checkWildy = {this.props.checkwildy} checkboxClick = {this.props.checkboxClick} legs={this.state.legs} setLegs={this.setLegs} ring={this.state.ring} setRing={this.setRing} feet={this.state.feet} setFeet={this.setFeet} hands={this.state.hands} setHands={this.setHands} shield={this.state.shield} setShield={this.setShield} body={this.state.body} setBody={this.setBody} wep={this.state.weapon} setWep={this.setWep} ammo={this.state.ammo} setAmmo={this.setAmmo} neck={this.state.neck} setNeck={this.setNeck} head={this.state.head} setHead={this.setHead} selectedSlot={this.state.selectedSlot} cape={this.state.cape} setCape={this.setCape}/> 
                : this.state.Prayers ? <PrayerPanel selectedPrayers={this.props.selectedPrayers} prayerClick={this.props.prayerClickHandler}/>
                : this.state.Skills ? <SkillsPanel miningLevel={this.props.miningLevel} vhp={this.props.visibleHitpoints} statsChange={this.props.statsChangeHandler} username={this.state.username} usernameChange={this.usernameChangeHandler} fetchClick={this.props.hiscoreFetchHandler} attackLevel={this.props.attackLevel} strengthLevel={this.props.strengthLevel} defenceLevel={this.props.defenceLevel} hitpointsLevel={this.props.hitpointsLevel} rangedLevel={this.props.rangedLevel} prayerLevel={this.props.prayerLevel} mageLevel={this.props.mageLevel}/>
                : this.state.Combat ? <StylesPanel chargedCheckHandler={this.props.chargedCheckHandler} checkedchargedspell={this.props.checkedchargedspell} currentSpell={this.state.selectedSpell} selectedStyle1={this.state.selectedStyle1} selectedStyle2={this.state.selectedStyle2} selectedStyle3={this.state.selectedStyle3} selectedStyle4={this.state.selectedStyle4} selectedStyle5={this.state.selectedStyle5} selectHandler={this.onSelectHandler} weapon={this.state.weapon}/>
                : this.state.Potions ? <BoostsPanel selectStr={this.props.setStrBoost} 
                                                    selectAtt={this.props.setAttBoost}
                                                    selectDef={this.props.setDefBoost}
                                                    selectMag={this.props.setMagBoost}
                                                    selectRang={this.props.setRanBoost}
                                                    selectOther={this.props.setOtherBoost}
                                                    str={this.props.strSelectedBoost} 
                                                    att={this.props.attSelectedBoost}
                                                    def={this.props.defSelectedBoost}
                                                    ran={this.props.rangeSelectedBoost}
                                                    mag={this.props.mageSelectedBoost}
                                                    other={this.props.otherSelectedBoost} selectedBoost={this.props.selectedBoost} attackLevel={this.props.attackLevel} strengthLevel={this.props.strengthLevel} defenceLevel={this.props.defenceLevel} rangedLevel={this.props.rangedLevel} mageLevel={this.props.mageLevel} boostedAtt={this.props.boostedAtt} boostedStr={this.props.boostedStr} boostedDef={this.props.boostedDef} boostedMage={this.props.boostedMage} boostedRange={this.props.boostedRange} boostlvl={this.props.boostStatHandler}/>
                : null }

            </div>
        )
    }
}

export default PlayerInputs