import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { WidgetEntity } from "./WidgetEntity";

@Entity ( "text_widgets" )
export class TextWidgetEntity {

    @PrimaryGeneratedColumn ()
    id: number;

    @OneToOne ( () => WidgetEntity, { cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE" } )
    @JoinColumn ()
    widget: WidgetEntity;

    @Column ()
    text: string;
}