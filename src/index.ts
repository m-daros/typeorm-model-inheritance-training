import "reflect-metadata";
import { createConnection } from "typeorm";
import { ImageWidgetEntity } from "./entity/ImageWidgetEntity";
import { TextWidgetEntity } from "./entity/TextWidgetEntity";
import { WidgetEntity } from "./entity/WidgetEntity";
import { TextWidget } from "./model/TextWidget";
import { ImageWidget } from "./model/ImageWidget";
import { ModelConverter } from "./ModelConverter";

const modelConverter = new ModelConverter ();

createConnection ()
    .then ( async connection => {

        usePersistence ( connection );
    } )
    .catch ( error => console.log ( error ) );

const usePersistence = async ( connection ) => {

        const textWidget1 = new TextWidget ();
        textWidget1.name = "my-text-widget-1";
        textWidget1.type = "text-widget";
        textWidget1.text = "my-text-1";
        textWidget1.x = 10;
        textWidget1.y = 20;
        textWidget1.z = 19;
        textWidget1.width = 500;
        textWidget1.height = 350;
        textWidget1.selected = true;
        textWidget1.start = 1234567;
        textWidget1.end = 9999999;
        textWidget1.visible = true;
        textWidget1.locked = false;

        const imageWidget1 = new ImageWidget ();
        imageWidget1.name = "my-image-widget-1";
        imageWidget1.type = "image-widget";
        imageWidget1.src = "http://my-images/image-1";
        imageWidget1.x = 5;
        imageWidget1.y = 55;
        imageWidget1.z = 19;
        imageWidget1.width = 700;
        imageWidget1.height = 430;
        imageWidget1.selected = false;
        imageWidget1.start = 1111111;
        imageWidget1.end = 2222222;
        imageWidget1.visible = false;
        imageWidget1.locked = true;

        const textWidgetEntity1 = modelConverter.toTextWidgetEntity ( textWidget1 );
        const imageWidgetEntity1 = modelConverter.toImageWidgetEntity ( imageWidget1 );

        await connection.manager.save ( textWidgetEntity1 );
        await connection.manager.save ( imageWidgetEntity1 );

        const textWidgetsEntities = await connection.manager.find ( TextWidgetEntity, { relations: [ "widget" ] } );
        const imageWidgetEntities = await connection.manager.find ( ImageWidgetEntity, { relations: [ "widget" ] } );

        console.log ( `Text Widgets: ${JSON.stringify ( modelConverter.toTextWidgets ( textWidgetsEntities ) )}`);
        console.log ( `Image Widgets: ${JSON.stringify ( modelConverter.toImageWidgets ( imageWidgetEntities ) )}`);

        // Retrieving only the common attributes of the widgets (we are able to retrieve them regardless of the concrete widget type)
        const widgets = await connection.manager.find ( WidgetEntity );

        console.log ( `Widgets: ${JSON.stringify ( modelConverter.toWidgets ( widgets ) )}` );
}