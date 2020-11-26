exports.mod = () => {
    logger.logInfo("[MOD]Better Canted Sights");
    let base = fileIO.readParsed(db.user.cache.items);
    for (let item in base.data) {
        if (item === "5649a2464bdc2d91118b45a8") {
            base.data[item]._props.BackgroundColor = "violet";
            base.data[item]._props.Slots[0]._props.filters[0].Filter = [
                "5b5f73ec86f774093e6cb4fd",
                "5448fe7a4bdc2d6f028b456b"
            ]
        }
        if (base.data[item]._parent === "5447b5cf4bdc2d65278b4567") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447b5f14bdc2d61278b4567") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447b5e04bdc2d62278b4567") {
            for (let slot in base.data[item]._props.Slots) {
                //Checks if the rifle has a scope slot
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447bed64bdc2d97278b4568") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447b5fc4bdc2d87278b4567") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447b6194bdc2d67278b4567") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447b6254bdc2dc3278b4568") {

            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447b6094bdc2dc3278b4567") {

            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._parent === "5447bedf4bdc2d87278b4568") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }

        }
        if (base.data[item]._parent === "5447b6254bdc2dc3278b4568") {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._name.includes("reciever")) {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear" || base.data[item]._props.Slots[slot]._name === "mod_sight_front") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
        if (base.data[item]._name.includes("handguard")) {
            for (let slot in base.data[item]._props.Slots) {
                if (base.data[item]._props.Slots[slot]._name === "mod_scope" || base.data[item]._props.Slots[slot]._name === "mod_sight_rear" || base.data[item]._props.Slots[slot]._name === "mod_sight_front") {
                    base.data[item]._props.Slots[slot]._props.filters[0].Filter.push("5649a2464bdc2d91118b45a8")
                }
            }
        }
    }
    fileIO.write(db.user.cache.items, base);
    logger.logSuccess("[Mod] Canted Sight successfully updated ");
}
