import { TextWidget } from "./model/TextWidget";
import { TextWidgetEntity } from "./entity/TextWidgetEntity";
import { WidgetEntity } from "./entity/WidgetEntity";
import { ImageWidget } from "./model/ImageWidget";
import { ImageWidgetEntity } from "./entity/ImageWidgetEntity";
import { Widget } from "./model/Widget";

// TODO Refactor to avoid code duplication
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
        entity.widget = this.toEntity ( widget as unknown as Widget );;

        return entity;
    }

    public toTextWidgetEntities = ( textWidgets: TextWidget [] ): TextWidgetEntity [] => {

        return textWidgets
            .map ( textWidget => this.toTextWidgetEntity ( textWidget ) );
    }

    public toImageWidgetEntities = ( imageWidgets: ImageWidget [] ): ImageWidgetEntity [] => {

        return imageWidgets
            .map ( imageWidget => this.toImageWidgetEntity ( imageWidget ) );
    }

    public toTextWidget = ( entity: TextWidgetEntity ): TextWidget => {

        var widget = new TextWidget ();
        widget.id       = entity.id;
        widget.name     = entity.widget.name;
        widget.type     = entity.widget.type;
        widget.x        = entity.widget.x;
        widget.y        = entity.widget.y
        widget.z        = entity.widget.z;
        widget.width    = entity.widget.width;
        widget.height   = entity.widget.height;
        widget.selected = entity.widget.selected;
        widget.start    = entity.widget.start;
        widget.end      = entity.widget.end;
        widget.visible  = entity.widget.visible;
        widget.locked   = entity.widget.locked;
        widget.text     = entity.text;

        return widget;
    }

    public toImageWidget = ( entity: ImageWidgetEntity ): ImageWidget => {

        var widget = new ImageWidget ();
        widget.id       = entity.id;
        widget.name     = entity.widget.name;
        widget.type     = entity.widget.type;
        widget.x        = entity.widget.x;
        widget.y        = entity.widget.y
        widget.z        = entity.widget.z;
        widget.width    = entity.widget.width;
        widget.height   = entity.widget.height;
        widget.selected = entity.widget.selected;
        widget.start    = entity.widget.start;
        widget.end      = entity.widget.end;
        widget.visible  = entity.widget.visible;
        widget.locked   = entity.widget.locked;
        widget.src      = entity.src;

        return widget;
    }

    public toTextWidgets = ( entities: TextWidgetEntity [] ): TextWidget [] => {

        return entities
            .map ( textWidget => this.toTextWidget ( textWidget ) );
    }

    public toImageWidgets = ( entities: ImageWidgetEntity [] ): ImageWidget [] => {

        return entities
            .map ( imageWidget => this.toImageWidget ( imageWidget ) );
    }

    public toWidget = ( entity: WidgetEntity ): Widget => {

        var widget = new Widget ();
        widget.id       = entity.id;
        widget.name     = entity.name;
        widget.type     = entity.type;
        widget.x        = entity.x;
        widget.y        = entity.y;
        widget.z        = entity.z;
        widget.width    = entity.width;
        widget.height   = entity.height;
        widget.selected = entity.selected;
        widget.start    = entity.start;
        widget.end      = entity.end;
        widget.visible  = entity.visible;
        widget.locked   = entity.locked;

        return widget;
    }

    public toEntity = ( widget: WidgetEntity ): WidgetEntity => {

        var entity = new WidgetEntity ();
        entity.id       = widget.id;
        entity.name     = widget.name;
        entity.type     = widget.type;
        entity.x        = widget.x;
        entity.y        = widget.y;
        entity.z        = widget.z;
        entity.width    = widget.width;
        entity.height   = widget.height;
        entity.selected = widget.selected;
        entity.start    = widget.start;
        entity.end      = widget.end;
        entity.visible  = widget.visible;
        entity.locked   = widget.locked;

        return entity;
    }

    public toWidgets = ( entities: WidgetEntity [] ): Widget [] => {

        return entities
            .map ( widget => this.toWidget ( widget ) );
    }
}