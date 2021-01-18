# Meraki CDN

- Type: <Badge text="Pyot Service" vertical="middle" />
- Models: <Badge text="LOL" type="error" vertical="middle" />
- Description: Store that provides data from the Meraki CDN, this store provides the endpoints for the Pyot Core Objects that returns static data. A list of the endpoints is found below.

:::tip INFO ABOUT THIS STORE
Until now, champion abilities in particular were unavailable because ddragon's (MEGA RE-RIP) data is inaccurate and cdragon's data (from the game itself) is unparsable because it's so complicated. Our goal here is to provide high quality data so that you can create awesome applications. We've got a big update on the data format now, mostly for champion stats, and thanks to @dryan (who did all the work) we have a huge update with items as well (they exist!). The goal for items is similar: to provide high quality data so that you can make awesome apps that were not possible without having this accurate data.
:::

## Pipeline Settings Reference
### Backend: `pyot.stores.MerakiCDN`
### Arguments:
> #### `error_handling: Mapping[int, Tuple[str, List[int]]] = None`
> Define how this store should handle request errors, please refer to [Error Handler](/pipeline/handler.html) documentations at Pipeline.
>
> #### `log_level: int = 10`
> Set the log level for the store. Defaults to 10 (DEBUG level).

## Endpoints

> ### `LOL` <Badge text="Model" type="warning" vertical="middle" />
>`"meraki_champion_by_key"`
>
>`"meraki_item_by_id"`

## Example Usage

```python
{
    "BACKEND": "pyot.stores.MerakiCDN",
    "LOG_LEVEL": 30,
    "ERROR_HANDLING": {
        404: ("T", []),
        500: ("R", [3])
    }
},
```
