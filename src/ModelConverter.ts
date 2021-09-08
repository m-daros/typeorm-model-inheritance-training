import { TextWidget } from "./model/TextWidget";
import { TextWidgetEntity } from "./entity/TextWidgetEntity";
import { WidgetEntity } from "./entity/WidgetEntity";
import { ImageWidget } from "./model/ImageWidget";
import { ImageWidgetEntity } from "./entity/ImageWidgetEntity";
import { Widget } from "./model/Widget";

export class ModelConverter {

    public toTextWidgetEntity = ( widget: TextWidget ): TextWidgetEntity => {

        var entity = new TextWidgetEntity ();
        entity.id     = widget.id;
        entity.text   = widget.text;
        entity.widget = this.toEntity ( widget as unknown as Widget );

        return entity;
    }

    public toImageWidgetEntity = ( widget: ImageWidget ): ImageWidgetEntity => {

        var entity = new ImageWidgetEntity ();
        entity.id     = widget.id;
        entity.src    = widget.src;
        entity.widget = this.toEntity ( widget as unknown as Widget );

        return entity;
    }

    public toTextWidget = ( entity: TextWidgetEntity ): TextWidget => {

        var textWidget = { ...entity.widget } as unknown as TextWidget;
        textWidget.id   = entity.id;
        textWidget.text = entity.text;

        return textWidget;
    }

    public toImageWidget = ( entity: ImageWidgetEntity ): ImageWidget => {

        var textWidget = { ...entity.widget } as unknown as ImageWidget;
        textWidget.id  = entity.id;
        textWidget.src = entity.src;

        return textWidget;
    }

    public toWidget = ( entity: WidgetEntity ): Widget => {

        return { ...entity } as Widget;
    }

    public toEntity = ( widget: WidgetEntity ): WidgetEntity => {

        return { ...widget } as WidgetEntity;
    }

    public toTextWidgets = ( entities: TextWidgetEntity [] ): TextWidget [] => {

        return entities
            .map ( textWidget => this.toTextWidget ( textWidget ) );
    }

    public toImageWidgets = ( entities: ImageWidgetEntity [] ): ImageWidget [] => {

        return entities
            .map ( imageWidget => this.toImageWidget ( imageWidget ) );
    }

    public toTextWidgetEntities = ( textWidgets: TextWidget [] ): TextWidgetEntity [] => {

        return textWidgets
            .map ( textWidget => this.toTextWidgetEntity ( textWidget ) );
    }

    public toImageWidgetEntities = ( imageWidgets: ImageWidget [] ): ImageWidgetEntity [] => {

        return imageWidgets
            .map ( imageWidget => this.toImageWidgetEntity ( imageWidget ) );
    }

    public toWidgets = ( entities: WidgetEntity [] ): Widget [] => {

        return entities
            .map ( widget => this.toWidget ( widget ) );
    }
}