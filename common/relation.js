/**
 * Created by Ian on 2016/3/6.
 */

/**
 * TODO so guess what i've done to find a next node in the script?
 * @returns {{}|*}
 */
ns.initRelation = function () {
    var relation = ns.controls.relation;
    // place defaut
    var scripts = Object.keys(ns.data);
    for(var i = 0; i < scripts.length - 1; i++){
        if(Object.keys(relation).indexOf(scripts[i]) == -1){
            relation[scripts[i]] = [{
                condition: true,
                child: scripts[i + 1],
                position: 0
            }]
        }
    }
    // the last one
    relation[scripts[i]] = null;

    return relation
};

ns.relation = {};