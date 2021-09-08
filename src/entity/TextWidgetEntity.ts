import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { WidgetEntity } from "./WidgetEntity";

@Entity ()
export class TextWidgetEntity {

    @PrimaryGeneratedColumn ()
    id: number;

    @OneToOne ( () => WidgetEntity, { cascade: true } )
    @JoinColumn ()
    widget: WidgetEntity;

    @Column ()
    text: string;
}